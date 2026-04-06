const container = document.querySelector("ul")
const button = document.getElementById("enviar")

button.addEventListener("click", () =>{
        const nome = document.getElementById("nome").value;
        const cpf = document.getElementById("cpf").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;

        cadastro = document.createElement("li")
        cadastro.innerHTML = `Nome: ${nome} <br> CPF:${cpf} <br> Email: ${email} <br> Telefone: ${telefone} <br>`
        container.appendChild(cadastro)
})