
export class Partida {
    carta: number;
    puntuacion: number;
    gameOver: boolean;

    constructor() {
        this.carta = 0;
        this.puntuacion = 0;
        this.gameOver = false;
    }
}