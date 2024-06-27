import { obtenerNumeroAleatorio, obtenerMensajeCuandoMePlanto, sumarPuntuacion, dameCarta } from "./modelo";
import { Partida } from "./motor";

const partida1 = new Partida();

const muestraPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  // hay que comprobar si elementoPuntuacion existe y si es instance of html element para acceder a innerHTML
  if (elementoPuntuacion && elementoPuntuacion instanceof HTMLElement) {
    elementoPuntuacion.innerHTML = `Tu puntuación: ${partida1.puntuacion}`.toString();
  }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);


//mostrar la carta cada vez que se pulsa el boton
const obtenerUrlCarta = (partida1: Partida) => {
  let sourceImg = "";
  //se establece un swich para todos los valores de carta y su correspondiente imagen
  switch (partida1.carta) {
    case 1:
      sourceImg =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      sourceImg =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      sourceImg =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      sourceImg =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      sourceImg =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      sourceImg =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      sourceImg =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      sourceImg =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      sourceImg =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      sourceImg =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
  }

  return sourceImg;
};

const pintarUrlImagen = (urlCarta: string) => {
  //se establece el src de la imagen dependiendo del case
  const elementoCarta = document.getElementById("carta-boca-abajo");
  if (elementoCarta && elementoCarta instanceof HTMLImageElement) {
    elementoCarta.src = urlCarta;
  }
};
const mostrarMensajeGameOver = (gameOver: boolean) => {
  if (gameOver){
    const elementoEstatusJuego = document.getElementById("estatus-juego");
    if (elementoEstatusJuego && elementoEstatusJuego instanceof HTMLElement) {
      elementoEstatusJuego.innerHTML = " Has perdido 😢😢";
  }
   //Bloquear el boton
    const elementoBotonDameCarta = document.getElementById("dame-carta");
    if (
    elementoBotonDameCarta &&
    elementoBotonDameCarta instanceof HTMLButtonElement
  ) {
    elementoBotonDameCarta.disabled = true;
  }
    const elementoBotonPlantarse = document.getElementById("plantarse");
    if (
      elementoBotonPlantarse &&
      elementoBotonPlantarse instanceof HTMLButtonElement
    ) {
      elementoBotonPlantarse.style.display = "none"; //ocultamos el boton si se ha perdido, ya que no tiene sentido plantarse
    }
    const elementoBotonWhatIf = document.getElementById("what-if");
    if (
      elementoBotonWhatIf &&
      elementoBotonWhatIf instanceof HTMLButtonElement
    ) {
      elementoBotonWhatIf.disabled = true;
    }
    mostrarBotonNuevaPartida();
  }
  //game over por llegar a más de 7.5
}; 

const gameOverExcesoPuntuacion = (partida1 : Partida) => {
  if (partida1.puntuacion > 7.5) {
    partida1.gameOver = true;
  }
  mostrarMensajeGameOver(partida1.gameOver);
};

//al pulsar el botón de mePlanto
const mePlantoClick = () => {
  let mensaje = obtenerMensajeCuandoMePlanto();
  // mostrar el mensaje
  const elementoEstatusPlantarse = document.getElementById("estatus-juego");
  if (
    elementoEstatusPlantarse &&
    elementoEstatusPlantarse instanceof HTMLElement
  ) {
    elementoEstatusPlantarse.innerHTML = `${mensaje} El juego ha terminado`;
  }
  //Bloquear el boton para no dejar que siga jugando
  const elementoBotonDameCarta = document.getElementById("dame-carta");
  if (
    elementoBotonDameCarta &&
    elementoBotonDameCarta instanceof HTMLButtonElement
  ) {
    elementoBotonDameCarta.disabled = true;
  }
};

// mostrar el boton para una nueva partida
const mostrarBotonNuevaPartida = () => {
  const elementoBotonNuevaPartida = document.getElementById("nueva-partida");
  if (
    elementoBotonNuevaPartida &&
    elementoBotonNuevaPartida instanceof HTMLButtonElement
  ) {
    elementoBotonNuevaPartida.style.display = "block"; // para que el botón se muestre
  }
};

//mostrar el boton de qué habría pasado
const mostrarBotonWhatIf = () => {
  const elementoBotonWhatIf = document.getElementById("what-if");
  if (elementoBotonWhatIf && elementoBotonWhatIf instanceof HTMLButtonElement) {
    elementoBotonWhatIf.style.display = "block"; // para que el botón se muestre
  }
};

//una vez se pulsa el boton de nueva partida, se tiene que resetear todo:
const resetearJuego = () => {
  partida1.puntuacion = 0;
  partida1.gameOver = false;

  const elementoBotonPedirCarta = document.getElementById("dame-carta");
  if (
    elementoBotonPedirCarta &&
    elementoBotonPedirCarta instanceof HTMLButtonElement
  ) {
    elementoBotonPedirCarta.disabled = false;
  }

  const elementoBotonWhatIf = document.getElementById("what-if");
  if (elementoBotonWhatIf && elementoBotonWhatIf instanceof HTMLButtonElement) {
    elementoBotonWhatIf.disabled = false;
    elementoBotonWhatIf.style.display = "none";
  }

  const elementoBotonMePlanto = document.getElementById("plantarse");
  if (
    elementoBotonMePlanto &&
    elementoBotonMePlanto instanceof HTMLButtonElement
  ) {
    elementoBotonMePlanto.disabled = false;
    elementoBotonMePlanto.style.display = "block";
  }

  const elementoEstatusJuego = document.getElementById("estatus-juego");
  if (elementoEstatusJuego && elementoEstatusJuego instanceof HTMLElement) {
    elementoEstatusJuego.innerHTML = "";
  }

  const elementoCarta = document.getElementById("carta-boca-abajo");
  if (elementoCarta && elementoCarta instanceof HTMLImageElement) {
    elementoCarta.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
  //mostrar la puntuación al usuario (tiene que ser 0 porque se ha reseteado)
  muestraPuntuacion();
  //volver a ocultar el boton de Nueva Partida
  const elementoBotonNuevaPartida = document.getElementById("nueva-partida");
  if (
    elementoBotonNuevaPartida &&
    elementoBotonNuevaPartida instanceof HTMLButtonElement
  ) {
    elementoBotonNuevaPartida.style.display = "none";
  }
};

//acciones al pulsar el boton 'nueva partida'
const handleNuevaPartidaClick = () => {
  resetearJuego();
};

//acciones al pulsar el boton 'dame carta'
const handlePedirCartaClick = () => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  partida1.carta = dameCarta(numeroAleatorio);
  const urlCarta = obtenerUrlCarta(partida1);
  pintarUrlImagen(urlCarta);
  let valor = sumarPuntuacion(partida1);
  partida1.puntuacion += valor;
  muestraPuntuacion();
  gameOverExcesoPuntuacion(partida1);
};

//acciones al pulsar el boton 'plantarse'
const handlePlantarseClick = () => {
  mePlantoClick();
  mostrarBotonNuevaPartida();
  mostrarBotonWhatIf();
  //desactivo el boton me planto porque no tiene sentido plantarse cuando ya lo ha hecho
  const elementoBotonMePlanto = document.getElementById("plantarse");
  if (
    elementoBotonMePlanto &&
    elementoBotonMePlanto instanceof HTMLButtonElement
  ) {
    elementoBotonMePlanto.disabled = true;
  }
};

//acciones al pulsar boton "¿que habria pasado?" (es como si siguiese jugando, hasta que sobrepase el límite de puntos)
const handleWhatIfClick = () => {
  partida1.carta = dameCarta(obtenerNumeroAleatorio());
  obtenerUrlCarta(partida1);
  let valor = sumarPuntuacion(partida1);
  partida1.puntuacion += valor;
  muestraPuntuacion();
  gameOverExcesoPuntuacion(partida1);
};

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













