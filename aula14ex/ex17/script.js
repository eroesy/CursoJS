function tabuada(){
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if (num.value.length != 0){
        var n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1;c <= 10;c++){
            let item = document.createElement('option')
            item.text =`${n} X ${c} = ${n*Number(c)}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }else{
        alert('[ERROR!!!] Digite um numero!')
    }
}