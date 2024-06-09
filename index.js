const express = require('express'); // importation du framework express
const app = express(); // création d'une instance de l'application express
const port =4000;
// Get pour lecture post pour envoie put pour modification delete pour suppression
// appel du body parser pour la lecture des données
const bodyParser = require('body-parser');
app.use(bodyParser.json());
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


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);
