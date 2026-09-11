
console.log("🔵 PASSO 1 — JavaScript começou.");

const estadoDiagnostico =
    document.querySelector("#estado");

if (estadoDiagnostico) {
    estadoDiagnostico.innerHTML =
        "🟢 PASSO 1 — JavaScript carregado.";
}


// ==========================================
// ELEMENTOS
// ==========================================

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


console.log("🔵 PASSO 2 — Elementos procurados.");


// ==========================================
// VERIFICAR ELEMENTOS
// ==========================================

if (
    contadorAniversario &&
    diasElemento &&
    horasElemento &&
    minutosElemento &&
    segundosElemento
) {

    console.log(
        "🟢 PASSO 3 — TODOS os elementos encontrados."
    );

    if (estadoDiagnostico) {
        estadoDiagnostico.innerHTML +=
            "<br>🟢 PASSO 3 — Elementos encontrados.";
    }


    // ======================================
    // CONFIGURAÇÃO ORIGINAL
    // ======================================

    const MODO_TESTE = true;
    const DURACAO_TESTE = 5;

    console.log(
        "🟢 PASSO 4 — Configuração criada."
    );


    const DATA_ANIVERSARIO =
        new Date(
            "2026-10-02T00:00:00"
        );


    let momentoFinal;


    if (MODO_TESTE) {

        console.log(
            "🟢 PASSO 5 — MODO TESTE ativado."
        );

        momentoFinal =
            Date.now() +
            DURACAO_TESTE * 1000;

    } else {

        console.log(
            "🟢 PASSO 5 — MODO REAL ativado."
        );

        momentoFinal =
            DATA_ANIVERSARIO.getTime();

    }


    console.log(
        "momentoFinal:",
        momentoFinal
    );


    // ======================================
    // FUNÇÃO DE FORMATAÇÃO
    // ======================================

    function formatarNumero(numero) {

        return String(numero).padStart(
            2,
            "0"
        );

    }


    console.log(
        "🟢 PASSO 6 — formatarNumero criada."
    );


    // ======================================
    // FUNÇÃO DO CONTADOR
    // ======================================

    function actualizarContador() {

        console.log(
            "🔄 actualizarContador executou."
        );


        const agora = Date.now();

        const diferenca =
            momentoFinal - agora;


        console.log(
            "Diferença:",
            diferenca
        );


        if (diferenca <= 0) {

            console.log(
                "🔴 DIFERENÇA <= 0"
            );

            diasElemento.textContent = "00";

            horasElemento.textContent = "00";

            minutosElemento.textContent = "00";

            segundosElemento.textContent = "00";

            return;
        }


        const totalSegundos =
            Math.floor(
                diferenca / 1000
            );


        console.log(
            "🟢 Segundos restantes:",
            totalSegundos
        );


        const dias =
            Math.floor(
                totalSegundos /
                (60 * 60 * 24)
            );


        const horas =
            Math.floor(
                (
                    totalSegundos %
                    (60 * 60 * 24)
                ) /
                (60 * 60)
            );


        const minutos =
            Math.floor(
                (
                    totalSegundos %
                    (60 * 60)
                ) /
                60
            );


        const segundos =
            totalSegundos %
            60;


        diasElemento.textContent =
            formatarNumero(dias);

        horasElemento.textContent =
            formatarNumero(horas);

        minutosElemento.textContent =
            formatarNumero(minutos);

        segundosElemento.textContent =
            formatarNumero(segundos);


        console.log(
            "🟢 DOM atualizado."
        );
    }


    console.log(
        "🟢 PASSO 7 — Função do contador criada."
    );


    // ======================================
    // PRIMEIRA EXECUÇÃO
    // ======================================

    actualizarContador();


    console.log(
        "🟢 PASSO 8 — Primeira execução concluída."
    );


    // ======================================
    // INTERVALO
    // ======================================

    setInterval(
        actualizarContador,
        1000
    );


    console.log(
        "🟢 PASSO 9 — setInterval criado."
    );


    if (estadoDiagnostico) {

        estadoDiagnostico.innerHTML +=
            "<br>🟢 PASSO 9 — Contador iniciado.";

    }

} else {

    console.log(
        "🔴 PASSO 3 — ALGUM ELEMENTO NÃO FOI ENCONTRADO."
    );

    if (estadoDiagnostico) {

        estadoDiagnostico.innerHTML +=
            "<br>🔴 PASSO 3 — Algum elemento não foi encontrado.";

    }

}

