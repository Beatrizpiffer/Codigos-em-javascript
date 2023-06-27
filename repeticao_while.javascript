<script>
var numero,  contador = 0;
numero = prompt("Digite um número qualquer entre 10 e 100");

if ((numero < 10) || (numero > 100))
{
    alert("Valor fora do intervalo espercificado!");
}
else
{
     While (contador <=numero)
    {
            document.write(congtador + "<br/>");
            contador++
     }
}
</script>
