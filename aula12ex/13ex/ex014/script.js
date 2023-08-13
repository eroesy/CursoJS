function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var atual = new Date()
    var horas = atual.getHours()
   
    msg.innerHTML = `Atualmente são ${horas} horas`
    if (horas >= 0 && horas <= 12){
        //Dia
        img.src = 'manha.png'
        document.body.style.background ='#fdc69d'
        
    }else if(horas < 19){
        //tarde
        img.src = 'tarde.png'
        document.body.style.background ='#fe7400'
    }else{
        //noite
        img.src = 'noite.png'
        document.body.style.background='#011c31'
    }


}
