import Joi from 'joi';

export const schema = Joi.object({
    sId:Joi.string().email().required(),
    sPassword: Joi.string().required().min(6).max(20)
});
