const axios = require('axios')
axios.get('https://viacep.com.br/ws/12422180/json/')
.then(function(res){
    const cep = res.data
    console.log("cep:")
    console.log(cep.cep)
    console.log("-----------")
    console.log("logradoura:")
    console.log(cep.logradoura)
    console.log("-----------")
    console.log("Complemento:")
    console.log(cep.complemento)
    console.log("-----------")
    console.log("bairro:")
    console.log(cep.bairro)
    console.log("-----------")
    console.log("localidade:")
    console.log(cep.localidade)
    console.log("-----------")
    console.log("uf:")
    console.log(cep.uf)
    console.log("-----------")
    console.log("unidade:")
    console.log(cep.unidade)
    console.log("-----------")
    console.log("ibge:")
    console.log(cep.ibge)
    console.log("-----------")
    console.log("gia:")
    console.log(cep.gia)
    
})