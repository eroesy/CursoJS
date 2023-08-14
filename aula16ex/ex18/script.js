let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores =  []

function isnumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }

}
function inlista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if (isnumero(num.value) && !inlista(num.value, valores)){
         valores.push(Number(num.value))
         let item = document.createElement('option')
         item.text = `Valor ${num.value} adicionando.`
         lista.appendChild(item)        
         res.innerHTML = ''
    }else{
        window.alert('Valor invalído ou ja encontrado na lista!')
    }
    num.value = ''
    num.focus()
   

}
function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores antes de concluir!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
            
        }
        media =soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados<p>`
        res.innerHTML += `<p>O maior dos valores é o ${maior}.<p>`
        res.innerHTML += `<p>O menor valor é o ${menor}.<p>`
        res.innerHTML += `<p>A soma de todos os valores é: ${soma}<p>`
        res.innerHTML += `<p>A media dos valores é ${media}<p>`
        
    }
}