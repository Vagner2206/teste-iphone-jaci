
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
    // FUNÇÃO
    // ======================================

    function actualizarContador() {

        estadoDiagnostico.innerHTML +=
            "<br>🔵 7A — Entrou na função.";


        const agora = Date.now();


        estadoDiagnostico.innerHTML +=
            "<br>🟢 7B — Date.now funcionou.";


        // ==================================
        // TESTE 7C-1
        // ==================================

        estadoDiagnostico.innerHTML +=
            "<br>🔵 7C-1 — Antes de testar momentoFinal.";


        const testeMomento =
            momentoFinal;


        estadoDiagnostico.innerHTML +=
            "<br>🟢 7C-1 — momentoFinal lido.";


        // ==================================
        // TESTE 7C-2
        // ==================================

        estadoDiagnostico.innerHTML +=
            "<br>🔵 7C-2 — Antes de subtrair.";


        const diferenca =
            momentoFinal - agora;


        estadoDiagnostico.innerHTML +=
            "<br>🟢 7C-2 — Subtração funcionou.";


        console.log(
            "momentoFinal:",
            momentoFinal
        );

        console.log(
            "agora:",
            agora
        );

        console.log(
            "diferenca:",
            diferenca
        );


        // ==================================
        // TESTE 7D
        // ==================================

        estadoDiagnostico.innerHTML +=
            "<br>🔵 7D — Antes do teste <= 0.";


        if (diferenca <= 0) {

            estadoDiagnostico.innerHTML +=
                "<br>🔴 7D — Diferença <= 0.";

            return;

        }


        estadoDiagnostico.innerHTML +=
            "<br>🟢 7D — Diferença > 0.";


        // ==================================
        // TESTE 7E
        // ==================================

        const totalSegundos =
            Math.floor(
                diferenca / 1000
            );


        estadoDiagnostico.innerHTML +=
            "<br>🟢 7E — Total de segundos calculado.";


        // ==================================
        // TESTE 7F
        // ==================================

        const segundos =
            totalSegundos % 60;


        estadoDiagnostico.innerHTML +=
            "<br>🟢 7F — Segundos calculados.";


        // ==================================
        // TESTE 7G
        // ==================================

        segundosElemento.textContent =
            String(segundos);


        estadoDiagnostico.innerHTML +=
            "<br>🟢 7G — Segundo escrito no DOM.";

    }


    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 7 — Função criada.";


    // ======================================
    // PRIMEIRA EXECUÇÃO
    // ======================================

    estadoDiagnostico.innerHTML +=
        "<br>🔵 PASSO 8 — Antes da execução.";


    actualizarContador();


    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 8 — Execução concluída.";

} else {

    estadoDiagnostico.innerHTML +=
        "<br>🔴 PASSO 3 — Elemento não encontrado.";

}

