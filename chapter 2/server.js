

const express = require('express');
const app = express();
const PORT = 8383;

app.get('/', (req, res) =>{
    res.send('<h1>hellooo</h1>')
});

app.get('/dashboard',(req, res)=>{
    console.log("l'endpoint du dashboard marche!!!");
    res.send('salut !');
})


app.listen(PORT, () => console.log(`server has started on: ${PORT}`));