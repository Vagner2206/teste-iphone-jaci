
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


if (
    contadorAniversario &&
    diasElemento &&
    horasElemento &&
    minutosElemento &&
    segundosElemento
) {

    console.log("🟢 PASSO 3 — Elementos encontrados.");

    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 3 — Elementos encontrados.";


    // ======================================
    // CONFIGURAÇÃO
    // ======================================

    const MODO_TESTE = true;

    const DURACAO_TESTE = 10;

    const DATA_ANIVERSARIO =
        new Date(
            "2026-10-02T00:00:00"
        );


    let momentoFinal;


    if (MODO_TESTE) {

        momentoFinal =
            Date.now() +
            DURACAO_TESTE * 1000;

    } else {

        momentoFinal =
            DATA_ANIVERSARIO.getTime();

    }


    console.log(
        "🟢 PASSO 5 — Configuração completa."
    );

    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 5 — Configuração completa.";


    // ======================================
    // PASSO 6
    // FORMATAR NÚMERO
    // ======================================

    console.log(
        "🔵 PASSO 6 — Antes de criar formatarNumero."
    );

    estadoDiagnostico.innerHTML +=
        "<br>🔵 PASSO 6 — Antes de criar formatarNumero.";


    function formatarNumero(numero) {

        return String(numero).padStart(
            2,
            "0"
        );

    }


    console.log(
        "🟢 PASSO 6 — formatarNumero criada."
    );

    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 6 — formatarNumero criada.";


    // ======================================
    // PASSO 7
    // FUNÇÃO DO CONTADOR
    // ======================================

    console.log(
        "🔵 PASSO 7 — Antes de criar actualizarContador."
    );

    estadoDiagnostico.innerHTML +=
        "<br>🔵 PASSO 7 — Antes de criar actualizarContador.";


    function actualizarContador() {

        console.log(
            "🔄 actualizarContador executou."
        );


        const agora = Date.now();

        const diferenca =
            momentoFinal - agora;


        console.log(
            "⏱️ Diferença:",
            diferenca
        );


        if (diferenca <= 0) {

            diasElemento.textContent = "00";

            horasElemento.textContent = "00";

            minutosElemento.textContent = "00";

            segundosElemento.textContent = "00";


            console.log(
                "🔴 Contador chegou ao fim."
            );

            return;
        }


        const totalSegundos =
            Math.floor(
                diferenca / 1000
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
        "🟢 PASSO 7 — actualizarContador criada."
    );

    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 7 — actualizarContador criada.";


    // ======================================
    // PASSO 8
    // PRIMEIRA EXECUÇÃO
    // ======================================

    console.log(
        "🔵 PASSO 8 — Antes da primeira execução."
    );

    estadoDiagnostico.innerHTML +=
        "<br>🔵 PASSO 8 — Antes da primeira execução.";


    actualizarContador();


    console.log(
        "🟢 PASSO 8 — Primeira execução concluída."
    );

    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 8 — Primeira execução concluída.";


    // ======================================
    // PASSO 9
    // SETINTERVAL
    // ======================================

    console.log(
        "🔵 PASSO 9 — Antes de criar setInterval."
    );

    estadoDiagnostico.innerHTML +=
        "<br>🔵 PASSO 9 — Antes de criar setInterval.";


    setInterval(
        actualizarContador,
        1000
    );


    console.log(
        "🟢 PASSO 9 — setInterval criado."
    );

    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 9 — setInterval criado.";


    // ======================================
    // TESTE FINAL
    // ======================================

    setTimeout(function () {

        estadoDiagnostico.innerHTML +=
            "<br><br>🎯 TESTE C TERMINADO.";

    }, 11000);


} else {

    console.log(
        "🔴 PASSO 3 — Algum elemento não encontrado."
    );

    estadoDiagnostico.innerHTML +=
        "<br>🔴 PASSO 3 — Algum elemento não encontrado.";

}

