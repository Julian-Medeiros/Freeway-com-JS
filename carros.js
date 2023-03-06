let carro1 = {
  imagem: '',
  x: xCanvas+50,
  y: yCanvas-75,
  largura: 40,
  altura: 25,
  xSpeed: 5
}
let carro2 = {
  imagem: '',
  x: xCanvas+50,
  y: yCanvas-180,
  largura: 40,
  altura: 25,
  xSpeed: 7
}
let carro3 = {
  imagem: '',
  x: xCanvas+50,
  y: yCanvas-295,
  largura: 40,
  altura: 25,
  xSpeed: 10
}

function moveCarros (carro){
   if(carro.x + carro.largura >= 0){
     carro.x -= carro.xSpeed;
   }else{
   carro.x = xCanvas+50;
   }
}

function colideCarros (carro){
  if(ator.y + ator.altura > carro.y){
    if (ator.x < carro.x+carro.largura &&
        ator.x+ator.largura > carro.x &&
        ator.y < carro.y+carro.altura &&
        ator.y+ator.altura > carro.y){

      ator.x = 50;
      ator.y = 370;
    }
  }
}



// let xCarros = [xCanvas-70, xCanvas-70, xCanvas-70];
// let yCarros = [yCanvas-75, yCanvas-180, yCanvas-295];
// let speedCarros = [4, 7, 10];
