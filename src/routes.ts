import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import compression from 'compression';
import expressRateLimit from 'express-rate-limit'
import helmet from 'helmet';
import fav from 'serve-favicon'

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

app.use(fav(__dirname + '/../views/images/favicon.ico'))

app.use(expressRateLimit({
    max: 10,
    windowMs: 1 * 60 * 1000
}))

// app.use(helmet())

app.use(compression());

app.use(express.json());

app.use(urlShortner);

app.listen(PORT);
