"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lenguaje_controller_1 = require("../controllers/lenguaje.controller");
const router = (0, express_1.Router)();
router.get('/', lenguaje_controller_1.getLenguajes);
router.get('/:id', lenguaje_controller_1.getLenguajeById);
router.delete('/:id', lenguaje_controller_1.deleteLenguaje);
router.post('/', lenguaje_controller_1.postLenguaje);
router.put('/:id', lenguaje_controller_1.putLenguaje);
exports.default = router;
