import express from 'express';
import { getUsuarios, creatUsuarios } from '../controllers/usuarios.js';

const router = express.Router();

router.get('/', getUsuarios);
router.post('/', creatUsuarios);

export default router;
