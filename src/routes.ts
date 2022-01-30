import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

// ---- Routes
import urlShortner from './routes/urlShortener';

// ---- Settings
import connectionMongoDb from './settings/mongodb';

dotenv.config()

const app = express();

connectionMongoDb();

app.use(
    cors({
        origin: '*',
        methods: 'GET,POST',
    })
);

app.set('view engine', 'ejs');

app.use(express.json());

app.use(urlShortner);

app.listen(3000);
