import { getLenguages, getLabels, addLenguage, updLenguage, delLenguage } from '../models/lenguage-model.js';

export const getLenguageAlls = async (req, res) => {//Uso de ES(EcmaScrip) MoDules
    const lenguages = await getLenguages();
    // const labels = await getLabels();

    if (!lenguages) {
        return res.status(404).json({ message: 'No se encontraron conocimientos' });
    }
    res.status(200).json(lenguages);
}

export const addLenguages = async (req, res) => {
    try {
        const response = await addLenguage(req.body);
        if (!response) return res.status(400).json({ message: "No pudo ser procesada la solicitud, comuniquese con el administrador" })
        return res.status(200).json({ message: "Lenguaje agregado con exito" });
    } catch (error) {
        return res.status(301).json({ message: "Se ha producido un error debido a: " + error })
    }
}

export const updLenguages = async (req, res) => {
    try {
        const response = await updLenguage(req.body);
        if (!response) return res.status(400).json({ message: "No pudo ser procesada la solicitud, comuniquese con el administrador" })
        return res.status(200).json({ message: "Lenguaje actualizado con exito" });
    } catch (error) {
        return res.status(301).json({ message: "Ha ocurrido un error al actualizar: " + error })
    }
}

export const delLenguages = async (req, res) => {
    try {
        const response = await delLenguage(req.body);
        if (!response) return res.status(400).json({ message: "No pudo ser procesada la solicitud, comuniquese con el administrador" })
        return res.status(200).json({ message: "Lenguaje eliminado correctamente" });
    } catch (error) {
        return res.status(301).json({ message: "Ha ocurrido un error al elimiar ellenguaje: " + error });
    }
}