<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Curso Js</title>
</head>
    <body>
     
    <h1></h1>

    <script scr="js/app.js"></script>

    var titulo = document.querySelector("h1")
    var texto = document.createTextNode("Um texto qualquer")

    titulo.appendChild(texto)

    titulo.textContent = "Um novo texto"
    </body>
</html>
