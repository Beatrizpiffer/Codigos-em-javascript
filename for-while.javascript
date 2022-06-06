<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Olá mundo</title>
</head>
<body>

    <ul>
        <li class="pais">Brasil</li>
        <li class="pais">Itália</li>
        <li class="pais">Portugal</li>
        <li class="pais">Estados Unidos</li>
    </ul>
    
     <script scr="app.js"></script>

</body>
</html>


/* Condicionais:
for 
while
*/

let paises = document.getElementsByClassName('pais')
let i = 0

/*for (let i = 0; i < paises.length; i++) {
    console.log(paises[i].innerHTML)
}
*/

do {
    console.log(paises[i].innerHTML)
    i++
}

while(i < paises.length)
