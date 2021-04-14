import { config } from 'dotenv';

config();

export default {
    server: {
        port: Number(process.env.SERVER_PORT),
    },
    token: {
        jwt_secret: process.env.JWT_SECRET,
    },
    admin: {
        name: process.env.ADMIN_NAME,
        length: Number(process.env.ADMIN_LENGTH),
    },
    bcrypt: {
        salt: Number(process.env.BCRYPT_SALT),
    }
}