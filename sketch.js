function setup() {               //função configurar
    createCanvas(600, 600);        //criar tela de pintura em pixels
    background("white");        //Fundo branco
  }
  
  function draw() {               //função desenhar
    
    stroke("blue");               //traço, borda azul
    fill("red");                  //preencher de vermelho
    //console.log(mouseIsPresses);  //
    
    if (mouseIsPressed) {               //se o mouse estiver pressionado
      rect(mouseX, mouseY, 20, 35);      //retângulo no mouse horizontal, vertical, tamanho 20 largura, 35 altura.
      //rect(posicao_x, posicao_y, largura, altura)
    }
  }