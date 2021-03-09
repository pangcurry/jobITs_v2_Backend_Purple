import Joi from 'joi';

export const schema = Joi.object().keys({
    sId:Joi.string().min(7).email({ minDomainSegments:3, tlds: { allow: ['kr'] } }),
    sPassword: Joi.string().min(6).max(20)
});
