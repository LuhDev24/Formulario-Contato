const form = document.getElementById("meuFormulario");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Mostra uma mensagem antes de enviar o formulário
    document.getElementById("mensagem").textContent = "Enviando dados...";
    
    // Simula envio do formulário para Netlify
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
    })
        .then(() => {
            document.getElementById("mensagem").textContent = "Formulário enviado com sucesso!";
            form.reset();
        })
        .catch(() => {
            
           
document.getElementById("mensagem").textContent = "Erro ao enviar o formulário. Tente novamente.";
        });
});