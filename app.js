//importo express
const express = require('express');
const app = express();
const port = 3000;

//dico ad express di utilizzare la cartella public
app.use(express.static('public'));
app.use(express.json());

//importo il file router per i post
const postRouter = require('./routers/posts.js');

app.use('/posts', postRouter);

app.get('/', (req, res) => {
  console.log('Server del mio blog');
})

//dico al server di rimanere in ascolto
app.listen(port, () => {
  console.log(`Server in ascolto alla porta ${port}`);
})