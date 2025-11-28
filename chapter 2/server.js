

const express = require('express');
const app = express();
const PORT = 8383;

let data = ['pharell']

//Middleware
app.use(express.json())


//type 1 - website endpoints (pour renvoyer du html arrive typiquement quand un utilisateur entre une url dans le navigateur)
app.get('/', (req, res) => {
    console.log('user requested the home page website')
    res.send(`
        <body style="background:pink; color:blue">
            <h1>DATA</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        <script !src="">console.log('this is my script')</script>`
    );
});

app.get('/dashboard', (req, res) => {
    console.log("l'endpoint du dashboard marche!!!");
    res.send(`
        <body>
            <h1>dashboard</h1>
            <a href="/">Go to Home</a>
        </body>`);
});

//type 2 - api endpoints

//CRUD-method - create-post read-get update-put and delete-delete

app.get('/api/data', (req, res)=> {
    console.log("celui là est pour les data");
    res.status(599).send(data);
})

app.post('/api/data', (req, res) => {
    //créer un utilisateur (ex: sign up)
    //l'utilisateur clique le bouton sign up après avoir entré ses informations
    const newEntry = req.body;
    console.log(newEntry)
    //ajouter un utilisateur
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', ()=>{
    data.pop();
    console.log("dernier element de l'array supprimé")
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`server has started on: ${PORT}`));