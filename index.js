const app = require('./src/server');
const db = require('./src/lib/db');

// creamos la base de datos si no se ha creado
db.createIfNotExist();

app.listen(3000, ()=>{
    console.log('Escuchando en puerto 3000')
})

