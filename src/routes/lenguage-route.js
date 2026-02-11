import { Router } from 'express';
import { getLenguageAlls, addLenguages, updLenguages, delLenguages } from '../controllers/lenguage-controller.js';
export const LenguageRouter = Router();

//Rutas para conocimientos
LenguageRouter.get('/', getLenguageAlls);
LenguageRouter.post('/', addLenguages);
LenguageRouter.put('/', updLenguages);
LenguageRouter.delete('/', delLenguages);
