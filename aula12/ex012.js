var agora = new Date()
var hora =  agora.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora > 6 && hora < 12){
    console.log('Bom Dia!')
}else if(hora < 18){    
    console.log('Boa Tarde!')
}else{
    console.log('Boa madrugada T-T!')
}
console.log(`Faltam ${21 - hora} horas para o seu horario de dormir`)