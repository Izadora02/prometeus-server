import mongoose from 'mongoose';
import TarefasSchema from '../models/tarefasModel.js';

export const getTarefas = async (req, res) => {
  try {
    const tarefas = await TarefasSchema.find();
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTarefa = async (req, res) => {
  const { id } = req.params;
  try {
    const tarefa = await TarefasSchema.findById(id);
    res.status(200).json(tarefa);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTarefas = async (req, res) => {
  const tarefa = req.body;
  const newTarefa = new TarefasSchema(tarefa);
  try {
    await newTarefa.save();
    res.status(200).json(newTarefa);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateTarefa = async (req, res) => {
  const { id: _id } = req.params;
  const tarefa = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('Tarefa não encontrada');

  const updatedTarefa = await TarefasSchema.findByIdAndUpdate(
    _id,
    { ...tarefa, _id },
    {
      new: true,
    }
  );
  res.json(updatedTarefa);
};

export const deleteTarefa = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('Tarefa não encontrada');

  await TarefasSchema.findByIdAndDelete(id);
  res.json({ message: 'Tarefa deletada' });
};

export const concluida = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('Tarefa não encontrada');
  const updatedTarefa = await TarefasSchema.findByIdAndUpdate(
    id,
    { status: 'Concluida' },
    { new: true }
  );
  res.json(updatedTarefa);
};
