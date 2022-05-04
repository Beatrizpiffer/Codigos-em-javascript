<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Curso Js</title>
</head>
    <body>

      <ul>
        <li>Café</li>
        <li>Leite</li>
        <li>Água</li>
      </ul>

      <ul>
        <li>Pão</li>
        <li>Queijo</li>
        <li>Nutella</li>
      </ul>
     
    <script scr="js/app.js"></script>
    var lista = document.getElementsByTagName("ul")[0]
    var itens = lista.children

    var novoItem = document.createElement("li")
    novoItem.textContent = "Suco de laranja"

    lista.insertBefore(novoItem, itens[2])

    var lista2 = document.getElementsByTagName("ul") [1]
    var itens2 = lista2.children
    var novoItem2 = document.createElement("li")
    novoItem2.textContent = "Margarina"

    lista2.replaceChild(novoItem2,itens2[2])

    console.log(lista2)

    </body>
</html>
