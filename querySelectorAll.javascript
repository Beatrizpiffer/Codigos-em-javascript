<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Olá mundo</title>
</head>
<body>

    <div id ="futebol-brasileiro">
        <div class="times">Flamengo</div>
        <div class="times">Botafogo</div>
        <div class="times">São Paulo</div>
    </div>
    
    <div id ="futebol-europeu">
        <div class="times">Real Madrid</div>
        <div class="times">Barcelona</div>
        <div class="times">Juventos</div>
    </div>



    
     <script scr="js\app.js"> </script>
     console.log(
    document.getElementById("futebol-europeu").querySelectorAll(".times")[2].innerHTML
)
     
</body>
</html>
