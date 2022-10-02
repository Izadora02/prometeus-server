import UsuariosSchema from '../models/usuariosModel.js';

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await UsuariosSchema.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const creatUsuarios = async (req, res) => {
  const user = req.body;
  const newUser = new UsuariosSchema(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
