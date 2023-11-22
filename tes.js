/* function balikan(input){
    return input.split('').reverse().join('')
}

console.log(balikan('dede'))

 */

let namaNormal = "subhan"
let namaDibalik = ""

for (let i = 0; i < namaNormal.length; i++) {
    namaDibalik = namaNormal.charAt(i) + namaDibalik;
    console.log(namaDibalik);
}