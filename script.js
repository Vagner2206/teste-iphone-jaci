
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
    // CONFIGURAÇÃO
    // ======================================

    const MODO_TESTE = true;
    const DURACAO_TESTE = 10;

    const DATA_ANIVERSARIO =
        new Date("2026-10-02T00:00:00");


    let momentoFinal;


    if (MODO_TESTE) {

        momentoFinal =
            Date.now() +
            DURACAO_TESTE * 1000;

    } else {

        momentoFinal =
            DATA_ANIVERSARIO.getTime();

    }


    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 5 — Configuração completa.";


    // ======================================
    // PASSO 6
    // ======================================

    function formatarNumero(numero) {

        return String(numero).padStart(
            2,
            "0"
        );

    }


    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 6 — formatarNumero criada.";


    // ======================================
    // PASSO 7
    // ======================================

    function actualizarContador() {

        console.log(
            "🔵 actualizarContador começou."
        );


        // -------------------------------
        // TESTE 7A
        // -------------------------------

        estadoDiagnostico.innerHTML +=
            "<br>🔵 TESTE 7A — Entrou na função.";


        // -------------------------------
        // TESTE 7B
        // -------------------------------

        const agora = Date.now();


        console.log(
            "🟢 TESTE 7B — Date.now dentro da função:",
            agora
        );


        estadoDiagnostico.innerHTML +=
            "<br>🟢 TESTE 7B — Date.now funcionou.";


        // -------------------------------
        // TESTE 7C
        // -------------------------------

        const diferenca =
            momentoFinal - agora;


        console.log(
            "🟢 TESTE 7C — Diferença:",
            diferenca
        );


        estadoDiagnostico.innerHTML +=
            "<br>🟢 TESTE 7C — Diferença calculada.";


        // -------------------------------
        // TESTE 7D
        // -------------------------------

        if (diferenca <= 0) {

            console.log(
                "🔴 TESTE 7D — Diferença <= 0."
            );

            estadoDiagnostico.innerHTML +=
                "<br>🔴 TESTE 7D — Diferença chegou a zero.";

            return;
        }


        console.log(
            "🟢 TESTE 7D — Diferença maior que zero."
        );


        estadoDiagnostico.innerHTML +=
            "<br>🟢 TESTE 7D — Diferença > 0.";


        // -------------------------------
        // TESTE 7E
        // -------------------------------

        const totalSegundos =
            Math.floor(
                diferenca / 1000
            );


        console.log(
            "🟢 TESTE 7E — Total de segundos:",
            totalSegundos
        );


        estadoDiagnostico.innerHTML +=
            "<br>🟢 TESTE 7E — Total de segundos calculado.";


        // -------------------------------
        // TESTE 7F
        // -------------------------------

        const dias =
            Math.floor(
                totalSegundos /
                (60 * 60 * 24)
            );


        console.log(
            "🟢 TESTE 7F — Dias:",
            dias
        );


        estadoDiagnostico.innerHTML +=
            "<br>🟢 TESTE 7F — Dias calculados.";


        // -------------------------------
        // TESTE 7G
        // -------------------------------

        const horas =
            Math.floor(
                (
                    totalSegundos %
                    (60 * 60 * 24)
                ) /
                (60 * 60)
            );


        console.log(
            "🟢 TESTE 7G — Horas:",
            horas
        );


        estadoDiagnostico.innerHTML +=
            "<br>🟢 TESTE 7G — Horas calculadas.";


        // -------------------------------
        // TESTE 7H
        // -------------------------------

        const minutos =
            Math.floor(
                (
                    totalSegundos %
                    (60 * 60)
                ) /
                60
            );


        console.log(
            "🟢 TESTE 7H — Minutos:",
            minutos
        );


        estadoDiagnostico.innerHTML +=
            "<br>🟢 TESTE 7H — Minutos calculados.";


        // -------------------------------
        // TESTE 7I
        // -------------------------------

        const segundos =
            totalSegundos %
            60;


        console.log(
            "🟢 TESTE 7I — Segundos:",
            segundos
        );


        estadoDiagnostico.innerHTML +=
            "<br>🟢 TESTE 7I — Segundos calculados.";


        // -------------------------------
        // TESTE 7J
        // -------------------------------

        const diasFormatados =
            formatarNumero(dias);


        console.log(
            "🟢 TESTE 7J — Dias formatados:",
            diasFormatados
        );


        estadoDiagnostico.innerHTML +=
            "<br>🟢 TESTE 7J — Dias formatados.";


        // -------------------------------
        // TESTE 7K
        // -------------------------------

        const horasFormatadas =
            formatarNumero(horas);


        const minutosFormatados =
            formatarNumero(minutos);


        const segundosFormatados =
            formatarNumero(segundos);


        console.log(
            "🟢 TESTE 7K — Números formatados."
        );


        estadoDiagnostico.innerHTML +=
            "<br>🟢 TESTE 7K — Números formatados.";


        // -------------------------------
        // TESTE 7L
        // -------------------------------

        diasElemento.textContent =
            diasFormatados;


        console.log(
            "🟢 TESTE 7L — Dias escritos no DOM."
        );


        estadoDiagnostico.innerHTML +=
            "<br>🟢 TESTE 7L — Dias escritos.";


        // -------------------------------
        // TESTE 7M
        // -------------------------------

        horasElemento.textContent =
            horasFormatadas;

        minutosElemento.textContent =
            minutosFormatados;

        segundosElemento.textContent =
            segundosFormatados;


        console.log(
            "🟢 TESTE 7M — Todos os números escritos."
        );


        estadoDiagnostico.innerHTML +=
            "<br>🟢 TESTE 7M — Contador escrito no DOM.";

    }


    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 7 — actualizarContador criada.";


    // ======================================
    // PASSO 8
    // PRIMEIRA EXECUÇÃO
    // ======================================

    estadoDiagnostico.innerHTML +=
        "<br>🔵 PASSO 8 — Antes da primeira execução.";


    actualizarContador();


    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 8 — Primeira execução concluída.";


} else {

    estadoDiagnostico.innerHTML +=
        "<br>🔴 PASSO 3 — Elemento não encontrado.";

}

