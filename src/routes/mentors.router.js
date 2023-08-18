const express = require('express')
const mentors = require('../usecases/mentors.usecase')
const router = express.Router()

// raiz de router mentors
router.get('/', ( req, res)=>{
    const allMentors = mentors.getAll();
    res.json({
        messsage: 'GET /mentors',
        mentors: mentors.getAll()
    })
})

// agregar un mentor
router.post('/', ( req, res)=>{
    const { name, email } = req.body;
    const newMentor = mentors.create( name, email );
    
    res.json({
        message: 'koder created successfully',
        mentors: mentors.getAll()
    })
})  

// borrar un mentor
router.delete('/:name', ( req, res)=>{
    const { name } = req.params; 

    mentors.remove( name )

    res.json({
        message: 'mentor deleted',
        mentors: mentors.getAll()
    })
})


module.exports = router;