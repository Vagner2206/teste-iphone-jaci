
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
    // TESTE 4A
    // ======================================

    console.log("🔵 TESTE 4A — Antes do MODO_TESTE.");

    estadoDiagnostico.innerHTML +=
        "<br>🔵 TESTE 4A — Antes do MODO_TESTE.";


    const MODO_TESTE = true;


    console.log("🟢 TESTE 4A — MODO_TESTE criado.");

    estadoDiagnostico.innerHTML +=
        "<br>🟢 TESTE 4A — MODO_TESTE criado.";


    // ======================================
    // TESTE 4B
    // ======================================

    console.log("🔵 TESTE 4B — Antes da duração.");

    estadoDiagnostico.innerHTML +=
        "<br>🔵 TESTE 4B — Antes da duração.";


    const DURACAO_TESTE = 5;


    console.log("🟢 TESTE 4B — DURACAO_TESTE criada.");

    estadoDiagnostico.innerHTML +=
        "<br>🟢 TESTE 4B — DURACAO_TESTE criada.";


    // ======================================
    // TESTE 4C
    // ======================================

    console.log("🔵 TESTE 4C — Antes da data.");

    estadoDiagnostico.innerHTML +=
        "<br>🔵 TESTE 4C — Antes da data.";


    const DATA_ANIVERSARIO =
        new Date(
            "2026-10-02T00:00:00"
        );


    console.log(
        "🟢 TESTE 4C — DATA_ANIVERSARIO criada."
    );

    estadoDiagnostico.innerHTML +=
        "<br>🟢 TESTE 4C — DATA_ANIVERSARIO criada.";


    // ======================================
    // TESTE 4D
    // ======================================

    console.log("🔵 TESTE 4D — Antes do Date.now.");

    estadoDiagnostico.innerHTML +=
        "<br>🔵 TESTE 4D — Antes do Date.now.";


    const AGORA = Date.now();


    console.log(
        "🟢 TESTE 4D — Date.now funcionou:",
        AGORA
    );

    estadoDiagnostico.innerHTML +=
        "<br>🟢 TESTE 4D — Date.now funcionou.";


    // ======================================
    // TESTE 4E
    // ======================================

    console.log(
        "🔵 TESTE 4E — Antes de calcular momentoFinal."
    );

    estadoDiagnostico.innerHTML +=
        "<br>🔵 TESTE 4E — Antes de calcular momentoFinal.";


    let momentoFinal;


    if (MODO_TESTE) {

        momentoFinal =
            AGORA +
            DURACAO_TESTE * 1000;

    } else {

        momentoFinal =
            DATA_ANIVERSARIO.getTime();

    }


    console.log(
        "🟢 TESTE 4E — momentoFinal criado:",
        momentoFinal
    );

    estadoDiagnostico.innerHTML +=
        "<br>🟢 TESTE 4E — momentoFinal criado.";


    // ======================================
    // TESTE 5
    // ======================================

    console.log(
        "🟢 PASSO 5 — Configuração completa."
    );

    estadoDiagnostico.innerHTML +=
        "<br>🟢 PASSO 5 — Configuração completa.";


} else {

    console.log(
        "🔴 PASSO 3 — Algum elemento não encontrado."
    );

    estadoDiagnostico.innerHTML +=
        "<br>🔴 PASSO 3 — Algum elemento não encontrado.";

}

