function validarNumero() {
    // Captura os elementos do HTML [cite: 93, 94]
    let numeroInput = document.getElementById("numero").value;
    let mensagem = document.getElementById("mensagem");

    // 1. Verifica se está vazio [cite: 95]
    if (numeroInput === "") {
        mensagem.textContent = "Por favor, insira um número."; // [cite: 96]
        mensagem.style.color = "red"; // [cite: 99]
    } else {
        // Converte para número inteiro [cite: 101]
        let numero = parseInt(numeroInput);

        // 2. Verifica se é maior que 10 [cite: 103]
        if (numero > 10) {
            mensagem.textContent = "O número é maior que 10."; // [cite: 104]
            mensagem.style.color = "green"; // [cite: 106]
        } 
        // 3. Verifica se é maior que 5 [cite: 107]
        else if (numero > 5) {
            mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10."; // [cite: 108]
            mensagem.style.color = "orange"; // [cite: 110]
        } 
        // 4. Caso seja 5 ou menor [cite: 111]
        else {
            mensagem.textContent = "O número é 5 ou menor."; // [cite: 112]
            mensagem.style.color = "blue"; // [cite: 114]
        }
    }
}