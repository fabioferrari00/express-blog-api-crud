

//importo express
const express = require('express');

//definisco l'oggetto router
const router = express.Router();

//index
router.get('/', (req, res) => {
  res.send("Elenco dei post");
})

//show
router.get('/:id', (req, res) => {
  res.send(`Dettaglio del post con id:${req.params.id}`);
})

//create
router.post('/', (req, res) => {
  res.send("Creazione nuovo post");
})

//update
router.put('/:id', (req, res) => {
  res.send(`Modifica totale al post con id:${req.params.id}`);
})

//modify
router.patch('/:id', (req, res) => {
  res.send(`Modifica parziale al post con id:${req.params.id}`);
})

//delete
router.delete('/:id', (req, res) => {
  res.send(`Eliminazione del post con id:${req.params.id}`);
})

//esporto il router
module.exports = router;