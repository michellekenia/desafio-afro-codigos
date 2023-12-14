
function diferencaParesImpares(matriz) {
  
    
    let somaPares = 0;
    let somaImpares = 0;
  
    for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        
        
  if (matriz[i][j] % 2 === 0) {
          somaPares += matriz[i][j];
        } 
        
  else {
          somaImpares += matriz[i][j];
        }
      }
    }
  
    return {
    
    somaPares: somaPares,
        
    somaImpares: somaImpares,

    diferenca: somaPares - somaImpares

      };
    
  }
  
  const matriz = [
    [2, 4, 9],
    [3, 5, 7],
    [10, 11, 8]];

  const result = diferencaParesImpares(matriz);
  
  console.log(matriz);
  console.log(result);
  

  