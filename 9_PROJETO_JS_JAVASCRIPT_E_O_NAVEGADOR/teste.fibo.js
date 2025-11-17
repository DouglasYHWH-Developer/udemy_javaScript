// Função para gerar a sequência de Fibonacci até um certo limite
function gerarFibonacciAte(limite) {
    let fib = [1, 2];
    let n1 = 1, n2 = 2, proximoNumero;
    
    while (n2 <= limite) {
        proximoNumero = n1 + n2;
        fib.push(proximoNumero);
        n1 = n2;
        n2 = proximoNumero;
    }
    
    return fib.reverse(); // Mantém em ordem decrescente
}

// Função para decompor um número em termos da sequência de Fibonacci
function decomporEmFibonacci(numero) {
    const sequenciaFib = gerarFibonacciAte(numero).reverse(); // Ordem crescente
    let decomposicao = [];
    
    for (let i = sequenciaFib.length - 1; i >= 0; i--) {
        while (sequenciaFib[i] <= numero) {
            numero -= sequenciaFib[i];
            decomposicao.push(sequenciaFib[i]);
        }
        if (numero === 0) break;
    }
    
    return decomposicao;
}

// Função para processar múltiplos números
function decomporMultiplosNumeros(numeros) {
    numeros.forEach(numero => {
        const resultado = decomporEmFibonacci(numero);
        console.log(`${numero} = ${resultado.join(' + ')}`);
    });
}

// Exemplo de uso
const numeros = [14, 21, 42, 47, 50, 59]; // Insere os números aqui
decomporMultiplosNumeros(numeros);