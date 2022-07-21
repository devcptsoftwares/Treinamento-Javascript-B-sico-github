/*
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
*/


var elTexto = document.querySelector('#texto');
var elNome = document.querySelector('#nome');

var pessoa = {nome: null};


document.querySelector('#botao').addEventListener('click', function (e) {
   e.preventDefault(); 
   pessoa.nome = elNome.value;
   elTexto.innerHTML = elNome.value;

   console.log(pessoa);
})

