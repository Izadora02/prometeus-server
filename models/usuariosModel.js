import mongoose from 'mongoose';

const usuariosSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  userType: String,
  photo: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const UsuariosSchema = mongoose.model('Usuarios', usuariosSchema);

export default UsuariosSchema;
