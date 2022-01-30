import mongoose from 'mongoose';

export default async function connectionMongoDb() {
    await mongoose.connect(String(process.env.MONGODB_URL)).then(() => console.log('Success connect in mongodb')).catch((e) => console.log(e))
}
