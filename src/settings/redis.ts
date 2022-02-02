import redis from 'ioredis';
import dotenv from 'dotenv'

dotenv.config()

const redisCache = new redis(process.env.REDISCLOUD_URL);

export default redisCache;
