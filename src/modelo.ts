import { Partida } from "./motor";

const partida1 = new Partida();

export const obtenerNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10) + 1;
};

//pedir una carta cada vez que se pulsa el boton
export const dameCarta = (numeroAleatorio: number): number => {
    // seleccionamos un numero aleatorio de 1 a 10. Se le suma uno para que no pueda dar 0. Como no queremos 8 ni 9 si el numero es mayor que 7, se le suma dos y así tenemos 8 => 10, 9 => 11, 10 => 12.
    if (numeroAleatorio > 7) {
        numeroAleatorio += 2;
    }
    return numeroAleatorio;
};

//sumar la puntuación sabiendo que si la carta vale 10, 11 o 12 el valor es 0.5
export const sumarPuntuacion = (partida1: Partida) => {
    let valor: number;
    if (partida1.carta === 10 || partida1.carta === 11 || partida1.carta === 12) {
        valor = 0.5;
    } else {
        valor = partida1.carta;
    }
    return valor;
};


export const obtenerMensajeCuandoMePlanto = () => {
    if (partida1.puntuacion <= 4.5) {
        return "Has sido muy conservador.";
    } else if (partida1.puntuacion === 5) {
        return "Te ha entrado el canguelo eh?";
    } else if (partida1.puntuacion <= 6.5 || partida1.puntuacion === 7) {
        return "Casi casi...";
    } else {
        return "¡ Lo has clavado! ¡Enhorabuena!";
    }
};
