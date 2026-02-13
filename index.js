import express, { json } from 'express';
import { LenguageRouter } from './src/routes/lenguage-route.js';
import { corsMiddleware } from './src/middlewares/cors.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';
import 'dotenv/config';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);
const port = process.env.PORT || 3000;
export const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
// app.use(corsMiddleware())

//Routes
app.use('/lenguage', LenguageRouter);
app.use((req, res) => { res.status(404).sendFile(__dirname + '/src/views/404.html') });

//Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
