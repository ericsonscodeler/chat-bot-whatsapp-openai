import { Redis } from 'ioredis'

import { config } from '../config'

export const redis = new Redis({
    db:config.redis.db,
    host: config.redis.host,
    port: config.redis.port
})