import * as Joi from '@hapi/joi';

export const ConfigValidationSchema = Joi.object({
  STAGE: Joi.string(), // dev | prod
  PORT: Joi.string(),

  JWT_SECRET: Joi.string(),
  EXPIRES_IN: Joi.number().integer(),

  DB_HOST: Joi.string(),
  DB_PORT: Joi.number().default(5432),
  DB_USERNAME: Joi.string(),
  DB_PASSWORD: Joi.string(),
  DB_DATABASE: Joi.string(),
});
