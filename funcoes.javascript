<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Curso Js</title>
</head>
    <body>

        <div id="resultado"></div>
     
    <script scr="js/app.js"></script>
    </body>
</html>
/* 
Functions
*/

function soma(x, y){
    return x + y
}

//console.log(soma(5, 7))
document.getElementById("resultado"),innerHTML = soma(5, 7)
