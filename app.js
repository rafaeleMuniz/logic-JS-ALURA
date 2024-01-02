alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
console.log(numeroSecreto);
let chute 
console.log("Valor do chute: ", chute);
console.log("Resultado da comparação: ", chute == numeroSecreto);
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if(chute == numeroSecreto){
        break; //Acertou, acabou! 
    } else{
        if(chute > numeroSecreto){
            alert(`O número é menor que ${chute}`);
        } else{
            alert(`O número é maior que o ${chute}`);
        }
        tentativas++;
    }    
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);