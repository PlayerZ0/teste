var n1 = parseInt(prompt("Digite número:"))
var n2 = parseInt(prompt('Digite outro número:'))

var op = prompt('Digite 1 para divisão, 2 para multiplicação, 3 para soma e 4 para subtração')

if (op == 1){
  var r = n1 / n2
  r.toFixed(2)
document.write('<h2>' + n1 + ' / ' + n2 + ' = ' + r + '</h2>')
} else if (op == 2){
  var r = n1 * n2
  r.toFixed(2)
  document.write('<h2>' + n1 + ' x ' + n2 + ' = ' + r +'</h2>')
} else if (op == 3){
  var r = n1 + n2
  r.toFixed(2)
  document.write('<h2>' + n1 + ' + ' + n2 + ' = ' + r +'</h2>')
} else if (op == 4){
  var r = n1 - n2
  r.toFixed(2)
  document.write('<h2>' + n1 + ' - ' + n2 + ' = ' + r +'</h2>')
} else {
  document.write('<h2>Opção inválida</h2>')
}