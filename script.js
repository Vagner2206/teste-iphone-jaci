console.log("🔵 DIAGNÓSTICO INICIADO");


// ==================================================
// 1. CONFIRMAR QUE O JAVASCRIPT CARREGOU
// ==================================================

const testeJS =
    document.querySelector("#testeJS");

if (testeJS) {

    testeJS.textContent =
        "✅ JavaScript carregado";

    testeJS.classList.add("sucesso");

}


// ==================================================
// ELEMENTOS DO DIAGNÓSTICO
// ==================================================

const segundosElemento =
    document.querySelector("#segundos");

const estadoContador =
    document.querySelector("#estadoContador");

const testeDate =
    document.querySelector("#testeDate");

const testeInterval =
    document.querySelector("#testeInterval");

const testeTexto =
    document.querySelector("#testeTexto");

const testeContador =
    document.querySelector("#testeContador");

const testeResultado =
    document.querySelector("#testeResultado");

const resultadoFinal =
    document.querySelector("#resultadoFinal");


// ==================================================
// VARIÁVEIS
// ==================================================

let valorContador = 5;

let intervalo = null;

let intervaloFuncionou = false;

let textoFuncionou = false;

let contadorFuncionou = false;


// ==================================================
// 2. TESTAR Date.now()
// ==================================================

try {

    const agora = Date.now();

    console.log(
        "Date.now():",
        agora
    );

    if (
        typeof agora === "number" &&
        agora > 0
    ) {

        testeDate.textContent =
            "✅ Date.now() está a funcionar";

        testeDate.classList.add(
            "sucesso"
        );

    } else {

        testeDate.textContent =
            "❌ Date.now() devolveu um valor inválido";

        testeDate.classList.add(
            "erro"
        );

    }

} catch (erro) {

    console.error(
        "Erro no Date.now():",
        erro
    );

    testeDate.textContent =
        "❌ Erro ao executar Date.now()";

    testeDate.classList.add(
        "erro"
    );

}


// ==================================================
// 3. TESTAR ATUALIZAÇÃO DO HTML
// ==================================================

try {

    segundosElemento.textContent =
        "05";

    if (
        segundosElemento.textContent ===
        "05"
    ) {

        textoFuncionou = true;

        testeTexto.textContent =
            "✅ JavaScript conseguiu alterar o texto da página";

        testeTexto.classList.add(
            "sucesso"
        );

    } else {

        testeTexto.textContent =
            "❌ JavaScript não conseguiu alterar o texto";

        testeTexto.classList.add(
            "erro"
        );

    }

} catch (erro) {

    console.error(
        "Erro ao alterar texto:",
        erro
    );

    testeTexto.textContent =
        "❌ Erro ao alterar o texto da página";

    testeTexto.classList.add(
        "erro"
    );

}


// ==================================================
// 4. TESTAR setInterval()
// ==================================================

let numeroTestesInterval =
    0;

try {

    intervalo =
        setInterval(function () {

            numeroTestesInterval++;

            console.log(
                "setInterval executou:",
                numeroTestesInterval
            );

            if (
                numeroTestesInterval >= 2
            ) {

                clearInterval(
                    intervalo
                );

                intervalo =
                    null;

                intervaloFuncionou =
                    true;

                testeInterval.textContent =
                    "✅ setInterval() está a funcionar";

                testeInterval.classList.add(
                    "sucesso"
                );

                iniciarContador();

            }

        }, 1000);

} catch (erro) {

    console.error(
        "Erro no setInterval():",
        erro
    );

    testeInterval.textContent =
        "❌ Erro ao executar setInterval()";

    testeInterval.classList.add(
        "erro"
    );

}


// ==================================================
// 5. CONTADOR REAL DE TESTE
// ==================================================

function iniciarContador() {

    console.log(
        "🟢 Iniciando contador..."
    );

    valorContador = 5;

    segundosElemento.textContent =
        String(valorContador);

    estadoContador.textContent =
        "Contador iniciado em 5...";

    const inicio =
        Date.now();

    const contadorIntervalo =
        setInterval(function () {

            const agora =
                Date.now();

            const tempoPassado =
                agora - inicio;

            console.log(
                "Tempo passado:",
                tempoPassado
            );

            valorContador--;

            if (
                valorContador < 0
            ) {

                clearInterval(
                    contadorIntervalo
                );

                valorContador =
                    0;

                segundosElemento.textContent =
                    "00";

                estadoContador.textContent =
                    "🎉 Contador chegou a zero!";

                contadorFuncionou =
                    true;

                testeContador.textContent =
                    "✅ Contador está a funcionar";

                testeContador.classList.add(
                    "sucesso"
                );

                finalizarDiagnostico();

                return;
            }

            segundosElemento.textContent =
                String(
                    valorContador
                ).padStart(
                    2,
                    "0"
                );

            estadoContador.textContent =
                "Contador a funcionar: " +
                valorContador;

        }, 1000);

}


// ==================================================
// 6. RESULTADO FINAL
// ==================================================

function finalizarDiagnostico() {

    console.log(
        "🔵 Finalizando diagnóstico..."
    );

    if (
        intervaloFuncionou &&
        textoFuncionou &&
        contadorFuncionou
    ) {

        testeResultado.textContent =
            "✅ Todos os testes principais passaram";

        testeResultado.classList.add(
            "sucesso"
        );

        resultadoFinal.style.display =
            "block";

        console.log(
            "🎉 TESTE CONCLUÍDO COM SUCESSO"
        );

    } else {

        testeResultado.textContent =
            "⚠️ O contador chegou ao fim, mas algum teste anterior falhou";

        testeResultado.classList.add(
            "aviso"
        );

    }

}