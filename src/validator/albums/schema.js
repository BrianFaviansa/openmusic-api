const Joi = require('joi');

const PostAlbumPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().required(),
});

const PutAlbumPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().required(),
});

module.exports = {PostAlbumPayloadSchema, PutAlbumPayloadSchema};