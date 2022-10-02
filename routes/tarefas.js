import express from 'express';
import {
  createTarefas,
  getTarefas,
  updateTarefa,
  deleteTarefa,
  concluida,
  getTarefa,
} from '../controllers/tarefas.js';

const router = express.Router();

router.get('/', getTarefas);
router.get('/:id', getTarefa);
router.post('/', createTarefas);
router.patch('/:id', updateTarefa);
router.delete('/:id', deleteTarefa);
router.patch('/:id/concluida', concluida);
export default router;
