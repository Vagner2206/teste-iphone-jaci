
console.log("🔵 PASSO 1 — JavaScript começou.");

const estadoDiagnostico =
    document.querySelector("#estado");

estadoDiagnostico.innerHTML =
    "🟢 PASSO 1 — JavaScript carregado.";


const contadorAniversario =
    document.querySelector("#contadorAniversario");

const diasElemento =
    document.querySelector("#dias");

const horasElemento =
    document.querySelector("#horas");

const minutosElemento =
    document.querySelector("#minutos");

const segundosElemento =
    document.querySelector("#segundos");


if (
    contadorAniversario &&
    diasElemento &&
    horasElemento &&
    minutosElemento &&
    segundosElemento
) {

    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 3 — Elementos encontrados.";


    // ======================================
    // TESTE
    // ======================================

    const agoraInicial =
        Date.now();

    const finalFixo =
        agoraInicial + 10000;


    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 5 — Número final criado.";


    function actualizarContador() {

        estadoDiagnostico.innerHTML +=
            "<br>🔵 7A — Entrou na função.";


        const agora =
            Date.now();


        estadoDiagnostico.innerHTML +=
            "<br>🟢 7B — Date.now funcionou.";


        // ==================================
        // NÃO USAMOS momentoFinal
        // ==================================

        const diferenca =
            finalFixo - agora;


        estadoDiagnostico.innerHTML +=
            "<br>🟢 7C — Subtração com número fixo funcionou.";


        const totalSegundos =
            Math.floor(
                diferenca / 1000
            );


        estadoDiagnostico.innerHTML +=
            "<br>🟢 7D — Total de segundos calculado.";


        const segundos =
            totalSegundos % 60;


        estadoDiagnostico.innerHTML +=
            "<br>🟢 7E — Segundos calculados.";


        segundosElemento.textContent =
            String(segundos);


        estadoDiagnostico.innerHTML +=
            "<br>🟢 7F — Número escrito no contador.";

    }


    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 7 — Função criada.";


    estadoDiagnostico.innerHTML +=
        "<br>🔵 PASSO 8 — Antes da execução.";


    actualizarContador();


    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 8 — Execução concluída.";


    setInterval(
        actualizarContador,
        1000
    );


    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 9 — setInterval criado.";

} else {

    estadoDiagnostico.innerHTML +=
        "<br>🔴 PASSO 3 — Elemento não encontrado.";

}

