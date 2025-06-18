const Joi = require('joi');

const PostSongPayloadSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().required(),
  genre: Joi.string().required(),
  performer: Joi.string().required(),
  duration: Joi.number().required(),
  albumId: Joi.string().optional().allow(null),
})

const PutSongPayloadSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().required(),
  genre: Joi.string().required(),
  performer: Joi.string().required(),
  duration: Joi.number().required(),
  albumId: Joi.string().optional().allow(null),
});

module.exports = {PostSongPayloadSchema, PutSongPayloadSchema};