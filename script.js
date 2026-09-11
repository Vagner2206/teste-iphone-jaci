
// ==========================================
// TESTE B
// CONTADOR ORIGINAL DO SITE
// ==========================================


// ------------------------------------------
// DIAGNÓSTICO INICIAL
// ------------------------------------------

const estadoDiagnostico =
    document.querySelector("#estado");

if (estadoDiagnostico) {
    estadoDiagnostico.innerHTML =
        '<span class="ok">🟢 JavaScript carregado.</span>';
}


// ------------------------------------------
// CÓDIGO ORIGINAL DO CONTADOR
// ------------------------------------------

const MODO_TESTE = true;
const DURACAO_TESTE = 5;

const DATA_ANIVERSARIO =
    new Date(
        "2026-10-02T00:00:00"
    );


const contadorAniversario =
    document.querySelector(
        "#contadorAniversario"
    );


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

    let momentoFinal;
    let contadorIntervalo = null;


    if (MODO_TESTE) {

        momentoFinal =
            Date.now() +
            DURACAO_TESTE * 1000;

    } else {

        momentoFinal =
            DATA_ANIVERSARIO.getTime();

    }


    function formatarNumero(numero) {

        return String(numero).padStart(
            2,
            "0"
        );

    }


    function desbloquearSite() {

        contadorAniversario.classList.add(
            "liberado"
        );

        document.body.style.overflow = "";

        console.log(
            "🎉 Contador terminou! Site desbloqueado."
        );

    }


    function actualizarContador() {

        const agora = Date.now();

        const diferenca =
            momentoFinal - agora;


        if (diferenca <= 0) {

            diasElemento.textContent = "00";

            horasElemento.textContent = "00";

            minutosElemento.textContent = "00";

            segundosElemento.textContent = "00";


            if (contadorIntervalo) {

                clearInterval(
                    contadorIntervalo
                );

                contadorIntervalo = null;

            }


            desbloquearSite();

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

    }


    document.body.style.overflow =
        "hidden";


    actualizarContador();


    contadorIntervalo =
        setInterval(
            actualizarContador,
            1000
        );


    // --------------------------------------
    // DIAGNÓSTICO
    // --------------------------------------

    if (estadoDiagnostico) {

        estadoDiagnostico.innerHTML =
            '<span class="ok">🟢 Todos os elementos do contador foram encontrados.</span>';

    }


    const segundosInicial =
        segundosElemento.textContent;


    setTimeout(function () {

        const segundosDepois =
            segundosElemento.textContent;


        if (segundosDepois !== segundosInicial) {

            if (estadoDiagnostico) {

                estadoDiagnostico.innerHTML +=
                    '<br><span class="ok">🟢 O contador está a atualizar.</span>';

            }

        } else {

            if (estadoDiagnostico) {

                estadoDiagnostico.innerHTML +=
                    '<br><span class="erro">🔴 O contador NÃO atualizou.</span>';

            }

        }

    }, 1500);


} else {

    if (estadoDiagnostico) {

        estadoDiagnostico.innerHTML =
            '<span class="erro">🔴 ERRO: algum elemento do contador não foi encontrado.</span>';

    }

}

