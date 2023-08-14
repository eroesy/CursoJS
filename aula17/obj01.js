let obj = {nome:'Matheus',
 Idade: '18',
  força: 200,
  aumentar(p= 0){
    'Melhorou'
    this.força += p

}}

console.log(`${obj.nome} tinha ${obj.força} porem agora ele ${obj.aumentar(999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999)} e tem ${obj.força}`)