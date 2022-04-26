
const prompt = require('prompt-sync')();
console.clear();

let yes = 1

//variaveis de cores da fonte
const red = '\u001b[31m'
const blue = '\u001b[34m'
const yellow = '\x1b[33m'
const green = '\x1b[32m'

//Função de segundos
function sleep(second) {
    return new Promise(solucao => setTimeout(solucao, second))
}

async function joke() {
    console.log(yellow+'LOADING....');
    await sleep(4000);
    console.clear()
    console.log('-------------------------------------------------------')
    console.log(blue+'Olá Meu nome é Ada vamos jogar uma partida de Jokenpô!')//cor vermelha no terminal
    console.log(yellow+'-------------------------------------------------------')
    console.log()
    await sleep(3000);
    const nome = prompt('Insira seu nome para indentificarmos o Jogador: ')

   
 
//VARIAVEIS DO NUMERO DE EMPATES E NUMERO QUE O USUARIO E A ADA GANHARAM 

while (yes === 1) {
  let empate = 0
  let championUser = 0
  let championAda = 0
  

  let rounds =  +prompt(blue+'Digite o numero de rounds que deseja jogar: ')
  
  console.clear()

//  A quantidade de rounds o tipo tem que ser number
  while (isNaN(rounds)) {
    
    console.log(red+'Voce digitou errado', +rounds )
    rounds = +prompt('Digite o numero de rounds que deseja jogar: ')
    console.clear()
  }

  for (let i = 1; i <= rounds; i++) {
    let playerChoice = prompt(`${nome} escolha entre PEDRA, PAPEL ou TESOURA. Para participar da ${i}ª rodada: `).toUpperCase().trim();
    console.clear();


    while (playerChoice != 'PEDRA' && playerChoice != 'PAPEL' && playerChoice != 'TESOURA') {
      console.log(red+`${nome} você digitou uma opção incorreta!`);
      playerChoice = prompt(blue+`Escolha entre PEDRA, PAPEL ou TESOURA. Para participar da ${i}ª rodada: `).toUpperCase().trim();
      console.clear();
    }

    const ada = ['PEDRA', 'PAPEL', 'TESOURA'];
    const aleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const adaChoice = ada[aleatorio(0, ada.length - 1)];
    console.log(green+`Você escolheu: ${playerChoice}`);
    console.log(`A Ada escolheu: ${adaChoice}`);

    let cont = 0;

    if (playerChoice == 'PEDRA' && adaChoice == 'PEDRA') {
      console.log(red+`A ${i}ª rodada foi um empate!`);
      empate++;

      cont = prompt(yellow+'Precione ENTER para continuar!');

    } else if (playerChoice == 'PEDRA' && adaChoice == 'PAPEL') {
      console.log(blue+`O vencedor da ${i}ª rodada foi a ADA!`);
      championAda++;

      cont = prompt(yellow+'Precione ENTER para continuar!');

    } else if (playerChoice == 'PEDRA' && adaChoice == 'TESOURA') {
      console.log(`O vencedor da ${i}ª rodada foi ${nome}!`);
      championUser++;
      cont = prompt('Precione ENTER para continuar!');

    } else if (playerChoice == 'PAPEL' && adaChoice == 'PEDRA') {

      console.log(`O vencedor da ${i}ª rodada foi ${nome}!`);
      championUser++;
      cont = prompt('Precione ENTER para continuar!');
    } else if (playerChoice == 'PAPEL' && adaChoice == 'PAPEL') {

      console.log(blue+`A ${i}ª rodada foi um empate!`);
      empate++;
      cont = prompt('Precione ENTER para continuar!');

    } else if (playerChoice == 'PAPEL' && adaChoice == 'TESOURA') {
      console.log(red+`O vencedor da ${i}ª rodada foi o ADA!`);
      championAda++;
      cont = prompt('Precione ENTER para continuar!');

    } else if (playerChoice == 'TESOURA' && adaChoice == 'PEDRA') {

      console.log(red+`O vencedor da ${i}ª rodada foi a ADA!`);
      championAda++;
      cont = prompt('Precione ENTER para continuar!');

    } else if (playerChoice == 'TESOURA' && adaChoice == 'PAPEL') {
      console.log(`O vencedor da ${i}ª rodada foi ${nome}!`);
      championUser++;
      cont = prompt('Precione ENTER para continuar!');

    } else if (playerChoice == 'TESOURA' && adaChoice == 'TESOURA') {
      console.log(`A ${i}ª rodada foi um empate!`);
      empate++;
      cont = prompt('Precione ENTER para continuar!')
    }
    console.clear();
  }
  console.clear();

  //tabela com o resultado
  const resultadosTabela = [
['Empate', nome, 'Ada'],
    [empate, championUser, championAda],
  ];
  console.table(resultadosTabela)
  await sleep(1000);
  console.log(red+`O número de rounds empatadas ${empate}!`)
  await sleep(4000);  
  console.log(`O número de rounds  que ${nome} VENCEU é de ${championUser}!`)
  await sleep(4000);
  console.log(`O número de rounds que A ADA VENCEU ${championAda}!`)
  await sleep(4000);
  if (championUser > championAda) {
    console.log(
      `${nome} foi o Grande vencedor do jogo! Ganhor ${championUser} rounds!`)

  } else if (championUser < championAda) {
    console.log(`A ADA foi o Grande vencedor do jogo! Ganhando ${championAda} rounds!`)

  } else {
    console.log('Não houve um Grande vencedor jogo. Foi um empate!')
  }

  yes = +prompt('Deseja jogar novamente? Digite 1 - para SIM e 2 - para NÃO: ')
  console.clear()
  console.log(yellow+'LOADING....');
  console.log('OBRIGADO')
    await sleep(2000);
    console.clear()
  while (yes != 1 && yes != 2) {
    console.log('opção errada!')
    yes = +prompt('Deseja jogar novamente? Digite 1 - para SIM e 2 - para NÃO: ')
    console.clear()
  }
}

}   

joke()