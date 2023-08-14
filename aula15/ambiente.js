var num = [2, 4 ,1 ,3,5]
num.push(9)
num.sort()
num[6] = 12

console.log(num)
console.log(`O vetor tem o tamanho de ${num.length} caracteres.`)
console.log(`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(12)
if (pos =-1){
    console.log('Valor não encontrado!')
}else{
    console.log(`O valor 12 estar na posição ${pos}`)
}
for(var posicao in num){
    console.log(`O valor ${num[posicao]} esta na posição ${posicao}`)
}