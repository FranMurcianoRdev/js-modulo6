
import { Partida } from "./modelo";

export const obtenerNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10) + 1;
};

export const dameCarta = (numeroAleatorio: number): number => {
    if (numeroAleatorio > 7) {
        numeroAleatorio += 2;
    }
    return numeroAleatorio;
};

export const sumarPuntuacion = (partida: Partida) => {
    let valor: number;
    if (partida.carta === 10 || partida.carta === 11 || partida.carta === 12) {
        valor = 0.5;
    } else {
        valor = partida.carta;
    }
    return valor;
};

export const obtenerMensajeCuandoMePlanto = (partida: Partida) => {
    if (partida.puntuacion <= 4.5) {
        return "Has sido muy conservador.";
    } else if (partida.puntuacion === 5) {
        return "Te ha entrado el canguelo eh?";
    } else if (partida.puntuacion <= 6.5 || partida.puntuacion === 7) {
        return "Casi casi...";
    } else {
        return "¡ Lo has clavado! ¡Enhorabuena!";
    }
};

export const gameOverExcesoPuntuacion = (partida: Partida) => {
    if (partida.puntuacion > 7.5) {
        partida.gameOver = true;
    }
};

export const obtenerUrlCarta = (partida: Partida) => {
    let sourceImg = "";
    switch (partida.carta) {
        case 1:
            sourceImg = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
            break;
        case 2:
            sourceImg = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
            break;
        case 3:
            sourceImg = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
            break;
        case 4:
            sourceImg = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
            break;
        case 5:
            sourceImg = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
            break;
        case 6:
            sourceImg = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
            break;
        case 7:
            sourceImg = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
            break;
        case 10:
            sourceImg = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
            break;
        case 11:
            sourceImg = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
            break;
        case 12:
            sourceImg = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
            break;
    }
    return sourceImg;
};
