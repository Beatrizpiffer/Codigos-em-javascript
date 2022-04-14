<body>

    <h1>O Jquery pode manipular o Dom</h1>
    <h2>Dom = Document Object Model (Modelo de Objeto de Documento </h2>
    <p>Em outras palavras é a árvore de elemntos do nosso código.O jquery pode acessar e atualizar dinamicamente o conteúdo, a estrutura e o estilo de um documento.<br> Tudo pode ser modificado, adicionado ou removido usando jquery. </p>
   
    <input id="texto" type="text" placeholder="Digite algo">
    <br><br>
    <a id="link" href="https://google.com.br">Link para o Google</a>

    <button id="botao">Verificar link</button>

    <br><br>

    <img src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112_960_720.png">

    <script src="js/jquery-3.6.0.js"></script>
    
    <script>
        
       $(document).ready(function() {
          $('#botao').clink(function() {
              var src = $("img").attr("src");
              alert('A imagem tem o caminho: '+ link);

           })
        });
    </script>
</body>
