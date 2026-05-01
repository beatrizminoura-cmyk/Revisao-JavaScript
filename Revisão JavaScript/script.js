/**
 * Função principal para validar o número digitado
 */
function validarNumero() {
    // Captura o valor do input e o elemento de mensagem
    let numeroInput = document.getElementById("numero").value;
    let mensagem = document.getElementById("mensagem");

    // Validação 1: Verifica se o campo está vazio
    if (numeroInput === "") {
        mensagem.textContent = "Por favor, insira um número."; 
        mensagem.style.color = "red";
    } else {
        // Converte a entrada de texto para número inteiro
        let numero = parseInt(numeroInput);

        // Validação 2: Verifica se é maior que 10 
        if (numero > 10) {
            mensagem.textContent = "O número é maior que 10."; 
            mensagem.style.color = "green"; 
        } 
        // Validação 3: Verifica se é maior que 5
        else if (numero > 5) {
            mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10.";
            mensagem.style.color = "orange";
        } 
        // Validação 4: Caso o número seja 5 ou menor 
        else {
            mensagem.textContent = "O número é 5 ou menor.";
            mensagem.style.color = "blue";
        }
    }
}