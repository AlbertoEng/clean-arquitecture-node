const fs = require('node:fs');
const filePath = 'db.json'

const defaultDB = {
    koders: [],
    mentors: [],
    generations: []
}

function createIfNotExist(  ){
    if( !fs.existsSync(filePath)){
        fs.writeFileSync(filePath, JSON.stringify(defaultDB), 'utf-8')
    }
}

function getData(){
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function updateData(  newData ){
    fs.writeFileSync(filePath, JSON.stringify( newData ), 'utf-8')
}

module.exports = {
    createIfNotExist,
    getData,
    updateData
}