<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aulas de Jquery</title>
    <style>
        body {
            text-align: center;
        }

        .d-none{
            display: none;
        }

        .d-inline {
            display: inline-block;
            height: 200px;
            width: 200px;
            position:absolute;
        }
        
        button {
            padding: 40px;
        }

        .red {
            background: red;
        }
        
        .blue {
            background: blue;
        }

        .green {
            background: green;
        }

        #flip,
         #panel{
          padding:5px;  
          text-align:center;
          background-color: blueviolet;
          color: white;
          cursor: pointer;
        }

        #panel{
            display: none;
            padding: 50px;
        }

    </style>
</head>

<body>

    <div class="d-inline red"></div>

    <script src="js/jquery-3.6.0.js"></script>
    
    <script>
        
       $(document).ready(function() {
          $('.red').click(function(){
               $(this).css('backgroud-color','blue').slideUp(2000).slideDown(2000);
            });

        });
    </script>
</body>
</html>
