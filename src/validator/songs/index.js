const {PostSongPayloadSchema, PutSongPayloadSchema} = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const SongsValidator = {
  validatePostSongPayload: (payload) => {
    const validationResult = PostSongPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePutSongPayload: (payload) => {
    const validationResult = PutSongPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  }
}

module.exports = SongsValidator;