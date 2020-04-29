const express = require('express')
const koders = require ('../usecases/koders')
const router = express.Router()

// router que se montara en /koders
// peticion GET /koders
router.get('/', async(request, response) => {
    const allKoders =await koders.getAll()
    response.json({
        message: 'All koders',
        data:{
            koders: allKoders
        }
    })
})

router.post('/', async(request, response) => {
    try{
        const newKoder =await koders.create(request.body)
        response.json({
            message: 'New koder was created',
            data:{
                koder: newKoder
            }
        })
    } catch(error){
        response.json({
            success: false
            error: error.message
        })
    }
})

module.exports = router

// try & catch
/*
try{
    //intenta hacer algo
} catch (error){
    // muestra error
}
*/
