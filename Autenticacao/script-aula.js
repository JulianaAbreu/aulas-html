var pessoa = "juliana"; // variável de escopo global, 
                        //não mais utilizada

const animal = 5; // variável constante, seu valor não
                  // não pode ser alterado depois
                  
let objeto = "mesa"; // variável que pode adquirir um 
                     // novo valor

objeto = "cadeira"; // exemplo de uma variável let com
                    // um novo valor

if(1+1 == 2 && 3+1 == 5 ) { // estrutura de decisao 
    return true;
} else { // se não retorna false
    return false;
}

function pintarCabelo () { // É uma ação, o nome deve conter um verbo
    // corpo da função
}

function somarNumeros (n1, n2) {
    const soma = n1+n2;

    return soma;
}

somarNumeros(10000, 20); 