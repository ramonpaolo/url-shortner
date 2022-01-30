import express from 'express';

// ---- Models
import UrlModel from '../models/urlModel';

const app = express();

app.get('/:name', async (req, res) => {
    const verifyUrlExists = await UrlModel.findOne({
        name: String(req.params.name),
    });

    if (verifyUrlExists === null)
        return res.status(401).json({
            status: 'error',
            data: {
                message: 'url not exists',
            },
        });

    const { url } = verifyUrlExists;
    return res.redirect(url);
});

app.get('/', async (req, res) => {
    return res.render('index.ejs', {
        PORT: process.env.PORT || 3000,
    });
});

app.post('/', async (req, res) => {
    const { name, url } = req.body;

    console.log(req.body);

    const verifyNameExists = await UrlModel.findOne({
        name,
    });

    if (verifyNameExists !== null)
        return res.status(401).json({
            status: 'error',
            data: {
                message: 'Name of url that exists',
            },
        });

    let urlCreated;

    try {
        urlCreated = await UrlModel.create({
            name,
            url,
        });
    } catch (e) {
        console.log('error to create user: ', e);
    }

    return res.status(201).json(urlCreated);
});

export default app;
