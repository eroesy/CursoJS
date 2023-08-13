function contar(){
    var res = document.getElementById('res')
    var inic = document.getElementById('inic')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
   
    if (inic.value.length == 0 || fim.value.length ==0){
        res.innerHTML = 'Impossivel contar '
    }else{
        if(passo.value == 0){
            alert('Passo invalido! Considerando PASSO com o valor de 1')
            passo.value = 1
        }
        res.innerHTML = 'Contando: '
        var i = Number(inic.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(i < f){
            for(var c = i;c <=f;c += p){// contagem regressiva
                res.innerHTML += `${c} \u{1f449}`
            }
        }else if(i > f){ //contagem regressiva
            for(var c = i;c>=f; c -=p)
            res.innerHTML +=`${c} \u{1f449}`
        }
       
        res.innerHTML += `${c} \u{1F3C1}`
        
    }

}

