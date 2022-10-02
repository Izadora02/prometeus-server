import mongoose from 'mongoose';

const tarefasSchema = mongoose.Schema({
  name: String,
  desc: String,
  status: String,
  pontuacao: String,
  file: String,
  fileResposta: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const TarefasSchema = mongoose.model('Tarefas', tarefasSchema);

export default TarefasSchema;
