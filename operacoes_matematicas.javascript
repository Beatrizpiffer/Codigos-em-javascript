<!DOCTYPE html>
<html lang="pt-BR">
<head>
<title>Seção 04 - Aula 04</title>
</head>
    <body>
       <h1>Seção 04 - Aula 04</h1>
           
        <script>
            var num1 = 42; num2 = 19, nome = 'Geek';
            //var num2 = 19;
            console.log(num1, num2, nome);

            // soma
            var res = num1 + num2;
            console.log("O resultado é:  " + res);
            console.log(nome);

            // CUIDADO! Dica Geek!
            var num3 = "39";
            res = num1 + num3;
            console.log(res);
            
            // Subtração 
            res = num1 - num2;
            console.log(res);

            //Multiplicação
            res = num1 * num2;
            console.log(res);

            //Divisão
            res = num1 / 2;
            console.log(res);

            // Módulo (resto da divisão)
            //num1 = num1 + 8;
            num1 +=8; // .=, *=, /=
            console.log(num1); //50

            console.log(num1++); //Imprime a variável e depois incrementa 50, 51
            console.log(num1--); //Imprime a variável e depois decrementa 51, 50
            console.log(++num1); //Incrementa e depois imprime.
            console.log(--num1); //Decrementa e depois imprime.

            var outro = 10;
            console.log(--outro);
            console.log(outro);




    </script>
  </body>
</html>
