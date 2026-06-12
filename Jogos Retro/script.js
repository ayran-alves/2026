const formulario = document.querySelector("#raffleForm");
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const celular = document.querySelector("#phone");
const mensagem = document.querySelector("#formMessage");

celular.addEventListener("input", () => {
    let numeros = celular.value.replace(/\D/g, "").slice(0, 11);

    if (numeros.length > 7) {
        celular.value = `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
    } else if (numeros.length > 2) {
        celular.value = `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    } else {
        celular.value = numeros;
    }
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nomeDigitado = nome.value.trim();
    const emailDigitado = email.value.trim();
    const celularDigitado = celular.value.trim();
    const numerosCelular = celularDigitado.replace(/\D/g, "");

    if (nomeDigitado.length < 3) {
        mostrarMensagem("Digite seu nome completo para participar.", "error");
        nome.focus();
        return;
    }

    if (!email.validity.valid) {
        mostrarMensagem("Digite um e-mail válido.", "error");
        email.focus();
        return;
    }

    if (numerosCelular.length < 10) {
        mostrarMensagem("Digite um celular com DDD.", "error");
        celular.focus();
        return;
    }

    const inscricoes = JSON.parse(localStorage.getItem("inscricoesRetroPlay")) || [];

    inscricoes.push({
        nome: nomeDigitado,
        email: emailDigitado,
        celular: celularDigitado
    });

    localStorage.setItem("inscricoesRetroPlay", JSON.stringify(inscricoes));

    formulario.reset();
    mostrarMensagem("Inscrição confirmada! Você está na lista dos sorteios Retro Play.", "success");
});

function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = `form-message ${tipo}`;
}
