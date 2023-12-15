// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

/*
Dados 2 arrays, crie uma função que permite ao usuário saber (verdadeiro/falso) se esses dois arrays contêm algum item em comum
Por exemplo:
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
deve retornar false.
-----------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
deve retornar verdadeiro.

2 parâmetros - arrays - sem limite de tamanho
retorna verdadeiro ou falso
 */

// function containsCommonItem(arr1, arr2) {
//   for (let i=0; i < arr1.length; i++) {
//     for ( let j=0; j < arr2.length; j++) {
//       if(arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false
// }

function containsCommonItem(arr1, arr2){
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(arr1[i] === arr2[j]){
        console.log("True")
        return true;
      }
    }
  }
  console.log("False")
  return false;
}

//O(a*b)
//O(1) - Space Complexity

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  // can we assume always 2 params?

  let map = {};
  for (let i=0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object. 
  for (let j=0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false
}

//O(a + b) Time Complexity
//O(a) Space Complexity

// containsCommonItem2(array1, array2)

function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

containsCommonItem(array1, array2)
containsCommonItem2(array1, array2)
const result = containsCommonItem3(array1, array2);
console.log("Result: ", result);

/*
O que è versionamento de Còdigo?
registra o historico de alualizção de um arquivo;
gerencia quais forram as alterações a data e autor

organização conrole e segurança
vcs centralizado (cvcs)
vcs distribuido (dvcs)
cada clone é como um backup
posibilitando um fluxo de trabalho flexivel;
posibilidade de trabalhar sem conecxao de rede

O que e git?
sistema de constroe de versão distribuido;
gratuito e open source (código aberto)
ramificaçoes (branching) e funções (merging) e eficientes;
leve e rápido

O que e githuh?
plataforma de hospedagem de codigo para controle de versões com git, e colaboração;

comunidade ativa;
utilizado mundialmente;
mascote "Octocat"

desenvolvida em 2008 por chirs wanstrath, j. Hyett, Tom Preson-Werner e Scott Chacon

2018 ataques de DDoS
comprado pela mincrosoft US $7,5 bilhões



 */