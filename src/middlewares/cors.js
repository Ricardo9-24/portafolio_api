import cors from 'cors';
import 'dotenv/config';

const ACCEPTED_ORIGINS = [
    process.env.ORIGIN_1,
    process.env.ORIGIN_2
]

export const corsMiddleware = ({ aceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
    origin: (origin, calback) => {

        if (!origin) {
            return calback(null, true);
        }

        if (aceptedOrigins.includes(origin)) {
            return calback(null, true);
        } else {
            calback(new Error("Origen no permitido por CORS"));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
})