import express from 'express';

// ---- Models
import UrlModel from '../models/urlModel';

const app = express();

app.get('/:name', async (req, res) => {
    const { name } = req.params;
    const verifyUrlExists = await UrlModel.findOne({
        name,
    });

    if (verifyUrlExists === null) {
        const names = await UrlModel.find(
            {
                $text: {
                    $search: String(name),
                },
            },
        );
        console.log(names);
        return res.status(404).render('404.ejs', { name, names });
    }

    const { url } = verifyUrlExists;
    return res.redirect(url);
});

app.get('/', async (req, res) => {
    return res.render('index.ejs', {
        PORT: process.env.PORT,
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

app.get('/*', (_, res) => res.status(404).render('error.ejs'));

export default app;
