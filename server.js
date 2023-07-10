const express = require('express');
const cors = require ('cors');


const app = express();
app.use(cors('*'));

app.get('/', (request, response) => {
    response.send("EXAM DAY");
})

app.listen(4000, '0.0.0.0', ()=>{console.log("port 4000")});

