const {PostAlbumPayloadSchema, PutAlbumPayloadSchema} = require("./schema");
const InvariantError = require("../../exceptions/InvariantError");
const {ImageHeadersSchema} = require("../uploads/schema");


const AlbumsValidator = {
  validatePostAlbumPayload: (payload) => {
    const validationResult = PostAlbumPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePutAlbumPayload: (payload) => {
    const validationResult = PutAlbumPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateImageHeaders: (headers) => {
    const validationResult = ImageHeadersSchema.validate(headers);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
}

module.exports = AlbumsValidator;