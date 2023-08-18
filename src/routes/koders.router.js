const express = require('express')
const koders = require('../usecases/koders.usecase')
const router = express.Router()

// raiz de router koders
router.get('/', ( req, res)=>{
    const allKoders = koders.getAll();
    res.json({
        messsage: 'GET /koders',
        koders: allKoders
    })
})

// agregar un koder
router.post('/', ( req, res)=>{
    const { name, email, program, generation} = req.body;
    const newKoder = koders.create( name, email, program, generation );
    
    res.json({
        message: 'koder created successfully',
        koders: koders.getAll()
    })
})  

// borrar un koder
router.delete('/:name', ( req, res)=>{
    const { name } = req.params; 

    koders.remove( name )

    res.json({
        message: 'koder deleted',
        koders: koders.getAll()
    })
})


module.exports = router;