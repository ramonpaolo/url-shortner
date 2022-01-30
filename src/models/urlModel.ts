import mongoose, { Schema } from 'mongoose';

const url = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 22,
    },
    url: {
        type: String,
        minlength: 4,
        maxlength: 255,
    },
    urlShortener: String,
});

const UrlModel = mongoose.model('Url', url);

export default UrlModel;
