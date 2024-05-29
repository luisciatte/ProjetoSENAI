document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("#loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
        verificarEmail();
    });
});

function verificarEmail() {
    var emailInput = document.getElementById("emailCliente").value;
    var senhaInput = document.getElementById("form2Example28").value;
    var emailIncorretoElement = document.getElementById("emailIncorreto");

    // Validação básica de email e senha
    if (emailInput.includes("@") && !emailInput.startsWith("@") && emailInput.includes(".") && senhaInput.length > 0) {
        var nomeUsuario = emailInput.split('@')[0];

        // Armazena o nome do usuário no localStorage
        localStorage.setItem('userEmail', nomeUsuario);

        // Redireciona para a página inicial
        window.location.href = "index.html";
    } else {
        // Exibe uma mensagem de erro se o email ou a senha forem inválidos
        emailIncorretoElement.innerHTML = "*E-mail ou senha incorretos";
    }
}
