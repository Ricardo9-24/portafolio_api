import { Router } from 'express';
import { getLenguageAll, addLenguage, updLenguage, delLenguage } from '../controllers/lenguage-controller.js';
export const LenguageRouter = Router();

//Rutas para conocimientos
LenguageRouter.get('/', getLenguageAll);
LenguageRouter.post('/', addLenguage);
LenguageRouter.put('/', updLenguage);
LenguageRouter.delete('/', delLenguage);
