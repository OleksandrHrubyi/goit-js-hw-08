import Joi from 'joi';
console.log(Joi)

const pasSchema = Joi.string().alphanum().min(10).max(12)

export default function validatePassword (psw) {
    return pasSchema.validate(psw)
}


