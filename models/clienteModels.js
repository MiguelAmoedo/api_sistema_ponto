const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_ACCESS = process.env.MONGO_ACCESS;

mongoose.connect(MONGO_ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch(err => console.error('Erro ao conectar ao MongoDB Atlas:', err));
  
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  sobrenome: {
    type: String,
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  postoGraduacao: {
    type: String,
    required: true,
    default: "Soldado"
  },
  organizacao: {
    type: String,
    required: true,
  },
  quadro: {
    type: String,
    required: true,
    default: "QPPM"
  },
  pracas: {
    type: String,
    required: true,
    default: "praças"
  },
  foto: {
    type: String,
  },
  guarnicao: {
    type: String,
    required: true,
  },
  telefone: {
    required: true,
    type: String,
  },
  senha: {
    required: true,
    type: String,
  },
  dataCadastro: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
  }
});


const ClienteModel = mongoose.model('Cliente', ClienteSchema);

module.exports = ClienteModel;