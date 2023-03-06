function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    ator.imagem = loadImage("imagens/ator-1.png");
    carro1.imagem = loadImage("imagens/carro-1.png");
    carro2.imagem = loadImage("imagens/carro-2.png");
    carro3.imagem = loadImage("imagens/carro-3.png");
//  imagemCarros = [loadImage("imagens/carro-1.png"),loadImage("imagens/carro-2.png"), loadImage("imagens/carro-3.png")];
}

//desenha os objetos
function mostraObjetos(atorCarro){
  image(atorCarro.imagem, atorCarro.x, atorCarro.y, atorCarro.largura, atorCarro.altura);
 // for(let i = 0; i < imagemCarros.length; i++){
   // image(imagemCarros[i], xCarros[i], yCarros[i], 40, 25);
  //}
}