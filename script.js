// Tipo:
// Aventura, Fantasia, Drama

// Nomes dos Filmes:
// Divertida Mente, Livre
// Up: Altas Aventuras, Livre
// O Rei Leão, Livre
// Planeta dos Macacos, Livre
// Matrix, 14
// Kong x Godzila, 12
// Frozen - Uma Aventura Congelante, Livre
// Monstros S.A., Livre
// Cruella, 12


function setup() {
    createCanvas(480, 280);
  }
  
  function draw() {
    background(200);
    let recomendacao = geraRecomendacao(idade);
    text(recomendacao, width / 2, height/ 2);
  }
  
  function geraRecomendacao(idade) {
    if (idade >= 10) {
        
      return "Matrix";
    } else {
      return ""
    }
  }