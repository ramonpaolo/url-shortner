import express from 'express';

// ---- Models
import UrlModel from '../models/urlModel';

//---- Settings
import redis from '../settings/redis';

const app = express();

app.get('/:name', async (req, res) => {
    const { name } = req.params;

    const responseCache = await redis.get(`${name}`);

    if (responseCache !== null) {
        return res.redirect(JSON.parse(responseCache)['url']);
    }

    const verifyUrlExists = await UrlModel.findOne({
        name,
    });

    if (verifyUrlExists === null) {
        const names = await UrlModel.find({
            $text: {
                $search: String(name),
            },
        });
        return res.status(404).render('404.ejs', { name, names });
    }

    const { url } = verifyUrlExists;

    const oneHourInSeconds = 60 * 60;

    await redis.setex(
        `${name}`,
        oneHourInSeconds,
        JSON.stringify({
            url,
            name,
        })
    );
    return res.redirect(url);
});

app.get('/', async (req, res) => {
    return res.render('index.ejs', {
        PORT: process.env.PORT,
    });
});

app.post('/', async (req, res) => {
    const { name, url } = req.body;

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
        console.log('error to create url: ', e);
    }

    return res.status(201).json(urlCreated);
});

export default app;
