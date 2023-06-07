import { Router } from "express";
import { deleteLenguaje, getLenguajeById, getLenguajes, postLenguaje, putLenguaje } from "../controllers/lenguaje.controller";

const router = Router();

router.get('/', getLenguajes);
router.get('/:id', getLenguajeById);
router.delete('/:id', deleteLenguaje);
router.post('/', postLenguaje);
router.put('/:id', putLenguaje);

export default router;
