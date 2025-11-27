

const express = require('express');
const app = express();
const PORT = 8383;

let data = ['pharell']

//Middleware
app.use(express.json())


//type 1 - website endpoints (pour renvoyer du html arrive typiquement quand un utilisateur entre une url dans le navigateur)
app.get('/', (req, res) => {
    res.send(`
        <body style="background:pink; color:blue">
            <h1>DATA</h1>
            <p>${JSON.stringify(data)}</p>
        </body>`
    );
});

app.get('/dashboard',(req, res)=>{
    console.log("l'endpoint du dashboard marche!!!");
    res.send('<h1>dashboard</h1>');
})

//type 2 - api endpoints

//CRUD-method - create-post read-get update-put and delete-delete

app.get('/api/data', (req, res)=> {
    console.log("celui là est pour les data");
    res.send(data);
})

app.post('/api/data', (req, res) => {
    //créer un utilisateur (ex: sign up)
    //l'utilisateur clique le bouton sign up après avoir entré ses informations
    const newEntry = req.body;
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.listen(PORT, () => console.log(`server has started on: ${PORT}`));