var list = []
var res = document.getElementById('res')
var num = document.getElementById('num')
var tab = document.getElementById('seltab')
function adicionar(){
    if(num.value.length == 0){
        alert('[ERROR!!!]Digite um numer a ser adicionado!')
    }else{
        var n = Number(num.value)
        var item = document.createElement('option')         

        if(list.indexOf(n) == -1){
            item.text = `Valor ${n} foi adicionado`
            tab.appendChild(item)
            list.push(n)
            num.value.length = 0
        }else{
            alert('[ERROR!!!]Esse valor ja foi adicionado!')         
        }
    }
}
function finalizar(){
    var p = document.createElement('p')
    p.innerHTML +=`Ao todo temos ${list.length} numeros cadastrados <br>`
    list.sort()
    p.innerHTML += `<br>O maior numero é o ${list[list.length-1]}<br>`
    p.innerHTML +=`<br>O menor numero é o ${list[0]}<br> `
    var soma = 0
    for(var c = 0;c<list.length;c++){
        soma += list[c]
        
    }
    p.innerHTML += `<br>A soma de todos os valores é ${soma}<br>`
    p.innerHTML +=`<br>A media dos valores é ${soma/list.length}<br>`
    
    
    res.appendChild(p)
}