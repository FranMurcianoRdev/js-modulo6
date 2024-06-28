import { obtenerNumeroAleatorio, sumarPuntuacion, dameCarta, gameOverExcesoPuntuacion, obtenerUrlCarta } from "./modelo";
import { Partida } from "./motor";
import { muestraPuntuacion, pintarUrlImagen, mostrarMensajeGameOver, mePlantoClick, mostrarBotonNuevaPartida, mostrarBotonWhatIf, resetearJuego } from "./ui";

const partida1 = new Partida();

document.addEventListener("DOMContentLoaded", () => {
    muestraPuntuacion(partida1);

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
    resetearJuego(partida1);
};

const handlePedirCartaClick = () => {
    const numeroAleatorio = obtenerNumeroAleatorio();
    partida1.carta = dameCarta(numeroAleatorio);
    const urlCarta = obtenerUrlCarta(partida1);
    pintarUrlImagen(urlCarta);
    let valor = sumarPuntuacion(partida1);
    partida1.puntuacion += valor;
    muestraPuntuacion(partida1);
    gameOverExcesoPuntuacion(partida1);
    if (partida1.gameOver) {
        mostrarMensajeGameOver();
    }
};

const handlePlantarseClick = () => {
    mePlantoClick(partida1);
    mostrarBotonNuevaPartida();
    mostrarBotonWhatIf();
    const elementoBotonMePlanto = document.getElementById("plantarse");
    if (elementoBotonMePlanto && elementoBotonMePlanto instanceof HTMLButtonElement) {
        elementoBotonMePlanto.disabled = true;
    }
};

const handleWhatIfClick = () => {
    partida1.carta = dameCarta(obtenerNumeroAleatorio());
    const urlCarta = obtenerUrlCarta(partida1);
    pintarUrlImagen(urlCarta);
    let valor = sumarPuntuacion(partida1);
    partida1.puntuacion += valor;
    muestraPuntuacion(partida1);
    gameOverExcesoPuntuacion(partida1);
    if (partida1.gameOver) {
        mostrarMensajeGameOver();
    }
};
