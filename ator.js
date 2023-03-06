let ator = {
  imagem: '',
  x: 50,
  y: 370,
  largura: 25,
  altura: 25,
  xSpeed: 2,
  ySpeed: 2, 
}

//move o ATOR
function moveAtor(keyIsDown){
  //SOBE
  if(keyIsDown(87) && (ator.y >= 5)){
    ator.y -= ator.ySpeed;
  }
  //DESCE
  if(keyIsDown(83) && (ator.y + ator.altura <= yCanvas-(6))){
    ator.y += ator.ySpeed;
  }
  //ESQUERDA
  if(keyIsDown(65) && (ator.x >= 2)){
    ator.x -= ator.xSpeed;
  }
  //DIREITA
  if(keyIsDown(68) && (ator.x + ator.largura <= xCanvas-1.5)){
    ator.x += ator.xSpeed;
  }
}