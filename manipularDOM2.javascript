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

     <div id="teste">
       <p>Paragrafo</p>
       <p>Paragrafo</p>
       <p>Paragrafo</p>
       <p>Paragrafo</p>
       <p>Paragrafo</p>
     </div>

    <br><br><br>
    <button id="botao1">Modificar Titulo h1</button><br><br>
    <button id="botao2">Modificar Titulo h2</button><br><br>
    <button id="botao3">Atribuir valor ao Input</button><br><br>
    <button id="botao4">Trocar o link</button><br><br>
    <button id="botao5">Trocar a imagem</button><br><br>
    <button id="botao6">Deletar o Título</button><br><br>
    <button id="botao7">Esvaziar Div</button><br><br>
    <hr>
    <button id="botao8">Modificar CSS</button><br><br>

    <script src="js/jquery-3.6.0.js"></script>
    
    <script>
        
       $(document).ready(function() {
          $('#botao1').click(function() {
              $('body').append('');
           });
          $('#botao2').click(function() {
              $('h2').html('<b>Mudei o h2</b> com <i>Jquery</i>');
            });
            $('#botao3').click(function(){
              $('#texto').val('Dimitri Teixeira');
            });
            $('#botao4').click(function(){
              $('#link').text('Ir para programacao web');
              $('#link').attr('href','https://programacaoweb.com.br');
            });
              $('#botao5').click(function(){
              $('img').attr('src','https://www.meioemensagem.com.br/wp-content/uploads/2020/06/Google_Site_Cred_400tmax-iStock.jpg');
            });
              $('#botao6').click(function(){
              $('h1').remove();

            });
              $('#botao7').click(function(){
              $('#teste').empty();
            });
              $('#botao8').click(function(){
              $('body').css('background', 'blue');

            });
        });
    </script>
</body>
</html>
