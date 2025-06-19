const redis = require('redis');
const InvariantError = require('../../exceptions/InvariantError');

class CacheService {
  constructor() {
    this._client = redis.createClient({
      socket: {
        host: process.env.REDIS_SERVER,
      },
    });

    this._client.on('error', (error) => {
      console.error('Redis Error:', error);
      throw new InvariantError('Gagal terhubung ke server cache');
    });

    this._client.connect();
  }

  async set(key, value, expirationInSecond = 1800) {
    await this._client.set(key, value, {
      EX: expirationInSecond,
    });
  }

  async get(key) {
    const result = await this._client.get(key);
    if (result === null) {
      return null;
    }
    return result;
  }

  async delete(key) {
    return this._client.del(key);
  }
}

module.exports = CacheService;