let puntuacion: number = 0; 
let carta: number = 0;

const muestraPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntuacion"); 
  // hay que comprobar si elementoPuntuacion existe y si es instance of html element para acceder a innerHTML
  if (elementoPuntuacion && elementoPuntuacion instanceof HTMLElement) {
    elementoPuntuacion.innerHTML = `Tu puntuación: ${puntuacion}`.toString();
  }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion); 

//pedir una carta cada vez que se pulsa el boton
const dameCarta = () : number => { 
  carta = Math.floor(Math.random() * 10) +1 // seleccionamos un numero aleatorio de 1 a 10. Se le suma uno para que no pueda dar 0. Como no queremos 8 ni 9 si el numero es mayor que 7, se le suma dos y así tenemos 8 => 10, 9 => 11, 10 => 12.
  if (carta > 7){ 
    carta +=2;
  }
  return carta;
}

//mostrar la carta cada vez que se pulsa el boton
const muestraCarta = (carta: number) => {
  let sourceImg = "";
  //se establece un swich para todos los valores de carta y su correspondiente imagen
  switch (carta) {
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
  
  //se establece el src de la imagen dependiendo del case
  const elementoCarta = document.getElementById("carta-boca-abajo");
  if (elementoCarta && elementoCarta instanceof HTMLImageElement) {
    elementoCarta.src = sourceImg;
  }
};

//sumar la puntuación sabiendo que si la carta vale 10, 11 o 12 el valor es 0.5
const sumarPuntuacion = (carta: number) : number => {
  let valor: number; 
  if (carta === 10 || carta === 11 || carta === 12 ){
    valor = 0.5;
  } else {
    valor = carta;
  }
  return valor;
};

let gameOver = false;
//game over por llegar a más de 7.5
const gameOverExcesoPuntuacion = (puntuacion: number) => {
  if (puntuacion > 7.5) {
    //Mostar el mensaje de game over
    const elementoEstatusJuego = document.getElementById("estatus-juego");
    if (elementoEstatusJuego && elementoEstatusJuego instanceof HTMLElement) {
      elementoEstatusJuego.innerHTML = ' Has perdido 😢😢';
    }
    //Bloquear el boton
    const elementoBotonDameCarta = document.getElementById("dame-carta");
    if (elementoBotonDameCarta && elementoBotonDameCarta instanceof HTMLButtonElement) {
      elementoBotonDameCarta.disabled = true;
    }
    gameOver = true;
  }
  if (gameOver) {
    const elementoBotonPlantarse = document.getElementById("plantarse");
    if (elementoBotonPlantarse && elementoBotonPlantarse instanceof HTMLButtonElement) {
      elementoBotonPlantarse.style.display = "none"; //ocultamos el boton si se ha perdido, ya que no tiene sentido plantarse
    }
    const elementoBotonWhatIf = document.getElementById("what-if");
    if (elementoBotonWhatIf && elementoBotonWhatIf instanceof HTMLButtonElement) {
      elementoBotonWhatIf.disabled = true;
    }
    mostrarBotonNuevaPartida();
  }
  
};

//al pulsar el botón de mePlanto
const mePlantoClick = (puntuacion: number) => { 
  let mensaje = "";
  if (puntuacion <= 4.5) {
    mensaje = "Has sido muy conservador.";
  } else if (puntuacion === 5) {
    mensaje = "Te ha entrado el canguelo eh?";
  } else if (puntuacion <= 6.5 || puntuacion === 7) {
    mensaje = "Casi casi...";
  } else {
    mensaje = "¡ Lo has clavado! ¡Enhorabuena!";
  } 
  // mostrar el mensaje
  const elementoEstatusPlantarse = document.getElementById("estatus-juego");
    if (elementoEstatusPlantarse && elementoEstatusPlantarse instanceof HTMLElement) {
      elementoEstatusPlantarse.innerHTML = `${mensaje} El juego ha terminado`;
    }
  //Bloquear el boton para no dejar que siga jugando
  const elementoBotonDameCarta = document.getElementById("dame-carta");
  if (elementoBotonDameCarta && elementoBotonDameCarta instanceof HTMLButtonElement) {
    elementoBotonDameCarta.disabled = true;
  }
};

// mostrar el boton para una nueva partida  
const mostrarBotonNuevaPartida = () => {
  const elementoBotonNuevaPartida = document.getElementById("nueva-partida");
  if (elementoBotonNuevaPartida && elementoBotonNuevaPartida instanceof HTMLButtonElement) {
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
  puntuacion = 0; 
  gameOver = false;
  
  const elementoBotonPedirCarta = document.getElementById("dame-carta");
  if (elementoBotonPedirCarta && elementoBotonPedirCarta instanceof HTMLButtonElement) {
    elementoBotonPedirCarta.disabled = false;
  };

  const elementoBotonWhatIf = document.getElementById("what-if");
  if (elementoBotonWhatIf && elementoBotonWhatIf instanceof HTMLButtonElement) {
    elementoBotonWhatIf.disabled = false;
    elementoBotonWhatIf.style.display = "none";
  };

  const elementoBotonMePlanto = document.getElementById("plantarse");
  if (elementoBotonMePlanto && elementoBotonMePlanto instanceof HTMLButtonElement) {
    elementoBotonMePlanto.disabled = false;
    elementoBotonMePlanto.style.display = "block";
  };

  const elementoEstatusJuego = document.getElementById("estatus-juego");
  if (elementoEstatusJuego && elementoEstatusJuego instanceof HTMLElement) {
    elementoEstatusJuego.innerHTML = ''; 
  };

  const elementoCarta = document.getElementById("carta-boca-abajo");
  if (elementoCarta && elementoCarta instanceof HTMLImageElement) {
  elementoCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg'; 
  };
  //mostrar la puntuación al usuario (tiene que ser 0 porque se ha reseteado)
  muestraPuntuacion();
  //volver a ocultar el boton de Nueva Partida
  const elementoBotonNuevaPartida = document.getElementById("nueva-partida");
  if (elementoBotonNuevaPartida && elementoBotonNuevaPartida instanceof HTMLButtonElement) {
    elementoBotonNuevaPartida.style.display = "none"; 
  };
};


//acciones al pulsar el boton 'nueva partida'
const handleNuevaPartidaClick = () => {
  resetearJuego();
};

//acciones al pulsar el boton 'dame carta'
const handlePedirCartaClick = () => {
  carta = dameCarta();
  muestraCarta(carta);
  let valor = sumarPuntuacion(carta);
  puntuacion += valor;
  muestraPuntuacion();
  gameOverExcesoPuntuacion(puntuacion);
};

//acciones al pulsar el boton 'plantarse'
const handlePlantarseClick = () => {
  mePlantoClick(puntuacion);
  mostrarBotonNuevaPartida();
  mostrarBotonWhatIf();
  //desactivo el boton me planto porque no tiene sentido plantarse cuando ya lo ha hecho
  const elementoBotonMePlanto = document.getElementById("plantarse");
  if (elementoBotonMePlanto && elementoBotonMePlanto instanceof HTMLButtonElement) {
    elementoBotonMePlanto.disabled = true;
  };
};

//acciones al pulsar boton "¿que habria pasado?" (es como si siguiese jugando, hasta que sobrepase el límite de puntos)
const handleWhatIfClick = () => {
  carta = dameCarta();
  muestraCarta(carta);
  let valor = sumarPuntuacion(carta);
  puntuacion += valor;
  muestraPuntuacion();
  gameOverExcesoPuntuacion(puntuacion);
}

const botonPedirCarta = document.getElementById("dame-carta");
if(botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
  botonPedirCarta.addEventListener("click", handlePedirCartaClick)
};

const botonMePlanto = document.getElementById("plantarse");
if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener("click", handlePlantarseClick)
};

const botonNuevaPartida = document.getElementById("nueva-partida");
if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", handleNuevaPartidaClick)
};

const botonWhatIf = document.getElementById("what-if");
if (botonWhatIf && botonWhatIf instanceof HTMLButtonElement) {
  botonWhatIf.addEventListener("click", handleWhatIfClick)
};