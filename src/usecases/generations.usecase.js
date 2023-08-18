const db = require('../lib/db')

// son funciones que implementaran todo lo que queramos hacer con las entidades
function create( program, number ) {
    const newGeneration = { program, number }
    const data = db.getData();
    data.generations.push(newGeneration);
    db.updateData(data);
}

function remove( program ) {
    const data = db.getData();
    const newGenerationList = data.generations.filter( gen => gen.program !== program);
    data.generations = newGenerationList;
    db.updateData(data)
}

function getAll() {
    const data = db.getData();
    return data.generations;
}


module.exports = {
    create, remove,
    getAll
}