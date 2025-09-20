// To run this server, you must first install the required packages:
// npm install express body-parser cors pg multer

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;

// --- Database Connection Configuration ---
// Make sure to configure this with your actual PostgreSQL credentials
const pool = new Pool({
    user: 'madc',
    host: 'localhost',
    database: 'armwebsite',
    password: '',
    port: 5432,
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client from pool', err.stack);
    }
    console.log('Successfully connected to the PostgreSQL database!');
    release();
});

// --- File Upload Setup (using multer) ---
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 50 * 1024 * 1024, // 50MB max file size
    },
    fileFilter: (req, file, cb) => {
        if (file.fieldname === 'conceptNote') {
            if (file.mimetype === 'application/pdf' || file.mimetype.includes('application/msword')) {
                cb(null, true);
            } else {
                cb(new Error('Invalid file type for Concept Note. Only PDF, DOC, and DOCX are allowed.'));
            }
        } else if (file.fieldname === 'animationsVideos') {
            if (file.mimetype === 'video/mp4') {
                cb(null, true);
            } else {
                cb(new Error('Invalid file type for Animations/Videos. Only MP4 is allowed.'));
            }
        } else {
            cb(new Error('Unexpected field name'));
        }
    },
});

// --- Middleware Setup ---
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads')); 

// --- POST Route to Handle Form Submissions with File Uploads ---
app.post(
    '/register',
    upload.fields([
        { name: 'conceptNote', maxCount: 1 },
        { name: 'animationsVideos', maxCount: 1 },
    ]),
    async (req, res) => {
        const {
            organizationName,
            region,
            contactPersonName,
            contactPhoneNumber,
            optionalPhoneNumber,
            contactEmail,
            thematicAreas
        } = req.body;
        
        const conceptNotePath = req.files.conceptNote ? req.files.conceptNote[0].path : null;
        const animationsVideosPath = req.files.animationsVideos ? req.files.animationsVideos[0].path : null;

        if (!organizationName || !region || !contactPersonName || !contactPhoneNumber || !contactEmail || !thematicAreas || !conceptNotePath || !animationsVideosPath) {
            return res.status(400).json({ message: 'Missing one or more required fields.' });
        }

        const queryText = `
            INSERT INTO exhibitor_registrations(
                organization_name, region, contact_person_name, contact_person_phone_number,
                optional_phone_number, contact_person_email, selected_thematic_areas,
                concept_note_path, animations_videos_path
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING id;
        `;

        const values = [
            organizationName,
            region,
            contactPersonName,
            contactPhoneNumber,
            optionalPhoneNumber,
            contactEmail,
            thematicAreas,
            conceptNotePath,
            animationsVideosPath
        ];

        try {
            await pool.query(queryText, values);
            console.log('Registration data successfully saved to the database!');
            res.status(200).json({ message: 'Registration received successfully!' });
        } catch (error) {
            console.error('Error saving data to database:', error);
            if (conceptNotePath) fs.unlinkSync(conceptNotePath);
            if (animationsVideosPath) fs.unlinkSync(animationsVideosPath);
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }
);

// --- NEW POST Route to Handle Contact Form Submissions ---
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Basic validation to ensure required fields are not empty
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // SQL query to insert the contact message into the new table
        const queryText = 'INSERT INTO contact_messages(name, email, message) VALUES($1, $2, $3)';
        const values = [name, email, message];
        
        // Execute the query
        await pool.query(queryText, values);
        
        console.log('Contact message successfully saved to the database!');
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error saving contact message:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// --- GET Route to Retrieve All Exhibitor Registrations ---
app.get('/exhibitors', async (req, res) => {
    const queryText = `
        SELECT
            organization_name,
            region,
            contact_person_name,
            contact_person_phone_number,
            contact_person_email,
            selected_thematic_areas,
            concept_note_path,
            animations_videos_path
        FROM exhibitor_registrations;
    `;
    try {
        const result = await pool.query(queryText);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error retrieving registrations from database:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
