<!DOCTYPE html>
<html>
<head>
<title>Tutorial de Alert em JavaScript - Linha de Código</title>
</head>
<body>

<p>Clique para exibir.</p>

<button onclick="myFunction()">Clique aqui</button>

<p id="demo"></p>

<script>
function myFunction()
{
var x;

var idade=prompt("Digite sua idade:");

if (idade!=null)
  {
  x="Idade: " + idade + " anos.";
  document.getElementById("demo").innerHTML=x;
  }
}
</script>

</body>
</html>
