const express = require('express'); // importation du framework express
const app = express(); // création d'une instance de l'application express
const port =4000;
// Get pour lecture post pour envoie put pour modification delete pour suppression
// appel du body parser pour la lecture des données
const bodyParser = require('body-parser');
app.use(bodyParser.json());

users=["ahmed","mohamed","ali"];


app.get('/', (req, res) => {
    res.send('Hello node js! <a href="/lien">visiter lien</a>');
}
);
app.get('/lien', (req, res) => {
    res.send('Hello from another page! <a href="/">retour</a>');
}
);
// post avec un message welcome + request body nom et prenom
app.post('/welcome', (req, res) => {
    res.send('Welcome ' + req.body.nom + ' ' + req.body.prenom);
}
);
app.get('/users', (req, res) => {
    res.send(users);
}
);
app.post('/users', (req, res) => {
    users.push(req.body.name);
    res.send(users);
}
);
app.post('/evaluation',(req,res)=>{
let note=req.body.note;
if(note>=10){
    res.send("vous avez reussi l'examen");
}
else{
    res.send("vous avez echoué l'examen");
}    
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);
