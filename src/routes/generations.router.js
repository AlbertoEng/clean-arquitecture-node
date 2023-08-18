const express = require('express')
const generations = require('../usecases/generations.usecase')
const router = express.Router();

// raiz de router generations
router.get('/', ( req, res)=>{
    const allGenerations = generations.getAll();
    res.json({
        messsage: 'GET /generations',
        generations: allGenerations
    })
})

// agregar una generation
router.post('/', ( req, res)=>{
    const { program, number } = req.body;
    const newGeneration = generations.create( program, number );
    
    res.json({
        message: 'generation created successfully',
        mentors: generations.getAll()
    })
})  

// borrar un generation
router.delete('/:program', ( req, res)=>{
    const { program } = req.params; 

    generations.remove( program )

    res.json({
        message: 'generation deleted',
        generations: generations.getAll()
    })
})

module.exports = router