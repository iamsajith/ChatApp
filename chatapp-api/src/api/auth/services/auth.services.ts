import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { REDIS_OPTIONS } from '../../../config';

const RedisStore = connectRedis(session)

const client =  new Redis(REDIS_OPTIONS)

export {RedisStore,client}