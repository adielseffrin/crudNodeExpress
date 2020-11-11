var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://dbUser:dbUserPassword@meubanco.ehih3.mongodb.net/meusDados?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var conn = mongoose.connection;
conn.on('error',console.error.bind(console, 'Erro na conexão com o BD:'));

var dadosPessoaisSchema = new mongoose.Schema(
  {
    _nome: String,
    _funcao: String
  }, 
  {
    collection: 'dadosPessoais'
  }
);

module.exports = {Mongoose: mongoose, DadosPessoaisSchema: dadosPessoaisSchema}