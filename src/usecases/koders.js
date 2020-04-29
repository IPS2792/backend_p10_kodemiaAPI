const Koder = require('../models/koders.js')

//los casos de uso son las acciones que puede ejercer un usuario en el sistema
async function getAll(){
    const allKoders = await Koder.find()
    return allKoders
}

async function create (koderData){
    const koderCreated = await Koder.create(koderData)
    return koderCreated
}

//en la ruta
//const koders = require(' ...koders')
//koders.getAll()

module.exports = {
    getAll, // solo devuelve el valor sin ejecutar la función 
    create
}

/*
async function create (koderData){
    const newKoder = new Koder(koderData)
    const koderCreated = await newKoder.save()
    return koderCreated
}
*/
/*
getAll().then(koders => {
    console.log('koders: ', koders)
}).catch(error => console.error('Error: ', error))
*/
