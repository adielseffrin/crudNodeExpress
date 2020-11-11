var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meu Crud!' });
});

router.get('/usuarios', function(req, res, next){
  var db = require('../db');
  var Users = db.Mongoose.model('dadosPessoais', db.DadosPessoaisSchema, 'dadosPessoais');
  Users.find({}).lean().exec(
    function(e,docs){
      res.render('usuarios', {"usuarios" : docs});
    }
  )
})

router.get('/newuser', function(req,res,next){
  res.render('addusuario');
})

router.post('/adduser', function(req, res, next){
  var db = require('../db');
  
  var nome = req.body.inputnome;
  var funcao = req.body.inputfuncao;

  var Users = db.Mongoose.model('dadosPessoais', db.DadosPessoaisSchema, 'dadosPessoais');
  var user = new Users({_nome: nome, _funcao: funcao});
  user.save(function(err){
    
    if(err){
      console.log("Erro! -> " + err.message);
      return err;
    }
    else{
      console.log("Usuário Salvo");
      res.redirect("usuarios");
    }
  })


})

module.exports = router;
