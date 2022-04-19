<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aulas de Jquery</title>
  
</head>

<body>

    <h1>O Jquery pode manipular o Dom</h1>
    <h2>Dom = Document Object Model (Modelo de Objeto de Documento </h2>
    <p>Em outras palavras é a árvore de elemntos do nosso código.O jquery pode acessar e atualizar dinamicamente o conteúdo, a estrutura e o estilo de um documento.<br> Tudo pode ser modificado, adicionado ou removido usando jquery. </p>
   
    <input id="texto" type="text" placeholder="Digite algo">
    <br><br>
    <a id="link" href="https://google.com.br">Link para o Google</a>

    <br><br>

    
    <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112_960_720.png">

    <br><br>

    <button id="botao1">Modificar Titulo h1</button>
    <button id="botao2">Modificar Titulo h2</button>
    <button id="botao3">Atribuir valor ao Input</button>
    <button id="botao3">Trocar o link</button>
    <button id="botao3">Trocar a imagem</button>


    <script src="js/jquery-3.6.0.js"></script>
    
    <script>
        
       $(document).ready(function() {
          $('#botao1').click(function() {
              $('h1').text('Mudei o texto com Jquery');
           });
          $('#botao2').click(function() {
              $('h2').html('<b>Mudei o h2</b> com <i>Jquery</i>');
            });
        });
    </script>
</body>
</html>
