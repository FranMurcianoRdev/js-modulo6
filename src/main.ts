import { obtenerNumeroAleatorio, sumarPuntuacion, dameCarta, gameOverExcesoPuntuacion, obtenerUrlCarta } from "./motor";
import { Partida } from "./modelo";
import { muestraPuntuacion, pintarUrlImagen, mostrarMensajeGameOver, mePlantoClick, mostrarBotonNuevaPartida, mostrarBotonWhatIf, resetearJuego } from "./ui";

const partida = new Partida();

document.addEventListener("DOMContentLoaded", () => {
    muestraPuntuacion(partida);

    const botonPedirCarta = document.getElementById("dame-carta");
    if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
        botonPedirCarta.addEventListener("click", handlePedirCartaClick);
    }

    const botonMePlanto = document.getElementById("plantarse");
    if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
        botonMePlanto.addEventListener("click", handlePlantarseClick);
    }

    const botonNuevaPartida = document.getElementById("nueva-partida");
    if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
        botonNuevaPartida.addEventListener("click", handleNuevaPartidaClick);
    }

    const botonWhatIf = document.getElementById("what-if");
    if (botonWhatIf && botonWhatIf instanceof HTMLButtonElement) {
        botonWhatIf.addEventListener("click", handleWhatIfClick);
    }
});

const handleNuevaPartidaClick = () => {
    resetearJuego(partida);
};

const handlePedirCartaClick = () => {
    const numeroAleatorio = obtenerNumeroAleatorio();
    partida.carta = dameCarta(numeroAleatorio);
    const urlCarta = obtenerUrlCarta(partida);
    pintarUrlImagen(urlCarta);
    let valor = sumarPuntuacion(partida);
    partida.puntuacion += valor;
    muestraPuntuacion(partida);
    gameOverExcesoPuntuacion(partida);
    if (partida.gameOver) {
        mostrarMensajeGameOver();
    }
};

const handlePlantarseClick = () => {
    mePlantoClick(partida);
    mostrarBotonNuevaPartida();
    mostrarBotonWhatIf();
    const elementoBotonMePlanto = document.getElementById("plantarse");
    if (elementoBotonMePlanto && elementoBotonMePlanto instanceof HTMLButtonElement) {
        elementoBotonMePlanto.disabled = true;
    }
};

const handleWhatIfClick = () => {
    partida.carta = dameCarta(obtenerNumeroAleatorio());
    const urlCarta = obtenerUrlCarta(partida);
    pintarUrlImagen(urlCarta);
    let valor = sumarPuntuacion(partida);
    partida.puntuacion += valor;
    muestraPuntuacion(partida);
    gameOverExcesoPuntuacion(partida);
    if (partida.gameOver) {
        mostrarMensajeGameOver();
    }
};
