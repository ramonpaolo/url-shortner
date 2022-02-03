import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import compression from 'compression';

// ---- Routes
import urlShortner from './routes/urlShortener';

// ---- Settings
import connectionMongoDb from './settings/mongodb';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

connectionMongoDb();

app.set('view engine', 'ejs');

app.use(
    cors({
        origin: '*',
        methods: 'GET,POST',
    })
);

app.use(compression());

app.use(express.json());

app.use(urlShortner);

app.listen(PORT);
