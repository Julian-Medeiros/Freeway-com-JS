let xCanvas = 600;
let yCanvas = 401;

function setup() {
    createCanvas(xCanvas, yCanvas);
}

function draw() {
    background(imagemDaEstrada);
    
    mostraObjetos (ator);
    mostraObjetos (carro1);
    mostraObjetos (carro2);
    mostraObjetos (carro3);
  
    moveCarros (carro1);
    moveCarros (carro2);
    moveCarros (carro3);
    moveAtor (keyIsDown);
    colideCarros (carro1);
    colideCarros (carro2);
    colideCarros (carro3);
}



