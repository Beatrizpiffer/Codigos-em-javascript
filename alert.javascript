/* 
Alert = método do window que recebe apenas um parametro (string)
Prompt = método do window que recebe um parametros (string) e retorna o valor da caixa 
Confirm = método do window que retorna true ou false
*/

let resposta = confirm("Tem certeza que deseja excluir esse item?")

if(resposta == true) {
    alert("Item excluido com sucesso!")
} else {
     alert("Exclusão cancelada")
}
