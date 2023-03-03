/*Javascript part:*/

/* Create four input boxes for variable numbers, A, B, C and D, add the numbers and compare percentage of each input with the final result. */
var A = document.createElement('input');
A.type = 'number';
A.id = 'A';
document.body.appendChild(A);
var B = document.createElement('input');
B.type = 'number';
B.id = 'B';
document.body.appendChild(B);
var C = document.createElement('input');
C.type = 'number';
C.id = 'C';
document.body.appendChild(C);
var D = document.createElement('input');
D.type = 'number';
D.id = 'D';
document.body.appendChild(D);
var button = document.createElement('button');
button.innerHTML = 'Add';
document.body.appendChild(button);
var result = document.createElement('div');
result.id = 'result';
document.body.appendChild(result);
var percentage = document.createElement('div');
percentage.id = 'percentage';
document.body.appendChild(percentage);
button.onclick = function() {
  var a = parseInt(document.getElementById('A').value);
  var b = parseInt(document.getElementById('B').value);
  var c = parseInt(document.getElementById('C').value);
  var d = parseInt(document.getElementById('D').value);
  var sum = a + b + c + d;
  document.getElementById('result').innerHTML = sum;
 
  var data = [{
    type: "pie",
  values: [a/sum, b/sum, c/sum, d/sum],
  labels: ['Deslocado', 'Inicio-deslocado', 'Fim-deslocado', 'Nao-deslocado'],
  textinfo: "label+percent",
  textposition: "outside",
  automargin: true
}];

var layout = {
  height: 600,
  width: 700
};
  document.getElementById('percentage').innerHTML = 'A: ' + Math.round(a / sum * 100) + '%' + ' B: ' + Math.round(b / sum * 100) + '%' + ' C: ' + Math.round(c / sum * 100) + '%' + ' D: ' + Math.round(d / sum * 100) + '%';
Plotly.newPlot('myDiv', data, layout);
}