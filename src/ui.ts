import { Partida } from "./modelo";
import { obtenerMensajeCuandoMePlanto } from "./motor";

export const muestraPuntuacion = (partida: Partida) => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    if (elementoPuntuacion && elementoPuntuacion instanceof HTMLElement) {
        elementoPuntuacion.innerHTML = `Tu puntuación: ${partida.puntuacion}`.toString();
    }
};

export const pintarUrlImagen = (urlCarta: string) => {
    const elementoCarta = document.getElementById("carta-boca-abajo");
    if (elementoCarta && elementoCarta instanceof HTMLImageElement) {
        elementoCarta.src = urlCarta;
    }
};

export const mostrarMensajeGameOver = () => {
    const elementoEstatusJuego = document.getElementById("estatus-juego");
    if (elementoEstatusJuego && elementoEstatusJuego instanceof HTMLElement) {
        elementoEstatusJuego.innerHTML = " Has perdido 😢😢";
        const elementoBotonDameCarta = document.getElementById("dame-carta");
        if (elementoBotonDameCarta && elementoBotonDameCarta instanceof HTMLButtonElement) {
            elementoBotonDameCarta.disabled = true;
        }
        const elementoBotonPlantarse = document.getElementById("plantarse");
        if (elementoBotonPlantarse && elementoBotonPlantarse instanceof HTMLButtonElement) {
            elementoBotonPlantarse.style.display = "none";
        }
        const elementoBotonWhatIf = document.getElementById("what-if");
        if (elementoBotonWhatIf && elementoBotonWhatIf instanceof HTMLButtonElement) {
            elementoBotonWhatIf.disabled = true;
        }
        mostrarBotonNuevaPartida();
    }
};

export const mePlantoClick = (partida: Partida) => {
    let mensaje = obtenerMensajeCuandoMePlanto(partida);
    const elementoEstatusPlantarse = document.getElementById("estatus-juego");
    if (elementoEstatusPlantarse && elementoEstatusPlantarse instanceof HTMLElement) {
        elementoEstatusPlantarse.innerHTML = `${mensaje} El juego ha terminado`;
    }
    const elementoBotonDameCarta = document.getElementById("dame-carta");
    if (elementoBotonDameCarta && elementoBotonDameCarta instanceof HTMLButtonElement) {
        elementoBotonDameCarta.disabled = true;
    }
};

export const mostrarBotonNuevaPartida = () => {
    const elementoBotonNuevaPartida = document.getElementById("nueva-partida");
    if (elementoBotonNuevaPartida && elementoBotonNuevaPartida instanceof HTMLButtonElement) {
        elementoBotonNuevaPartida.style.display = "block";
    }
};

export const mostrarBotonWhatIf = () => {
    const elementoBotonWhatIf = document.getElementById("what-if");
    if (elementoBotonWhatIf && elementoBotonWhatIf instanceof HTMLButtonElement) {
        elementoBotonWhatIf.style.display = "block";
    }
};

export const resetearJuego = (partida: Partida) => {
    partida.carta = 0;
    partida.puntuacion = 0;
    partida.gameOver = false;

    const elementoBotonPedirCarta = document.getElementById("dame-carta");
    if (elementoBotonPedirCarta && elementoBotonPedirCarta instanceof HTMLButtonElement) {
        elementoBotonPedirCarta.disabled = false;
    }

    const elementoBotonWhatIf = document.getElementById("what-if");
    if (elementoBotonWhatIf && elementoBotonWhatIf instanceof HTMLButtonElement) {
        elementoBotonWhatIf.disabled = false;
        elementoBotonWhatIf.style.display = "none";
    }

    const elementoBotonMePlanto = document.getElementById("plantarse");
    if (elementoBotonMePlanto && elementoBotonMePlanto instanceof HTMLButtonElement) {
        elementoBotonMePlanto.disabled = false;
        elementoBotonMePlanto.style.display = "block";
    }

    const elementoEstatusJuego = document.getElementById("estatus-juego");
    if (elementoEstatusJuego && elementoEstatusJuego instanceof HTMLElement) {
        elementoEstatusJuego.innerHTML = "";
    }

    const elementoCarta = document.getElementById("carta-boca-abajo");
    if (elementoCarta && elementoCarta instanceof HTMLImageElement) {
        elementoCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }
    muestraPuntuacion(partida);
    const elementoBotonNuevaPartida = document.getElementById("nueva-partida");
    if (elementoBotonNuevaPartida && elementoBotonNuevaPartida instanceof HTMLButtonElement) {
        elementoBotonNuevaPartida.style.display = "none";
    }
};
