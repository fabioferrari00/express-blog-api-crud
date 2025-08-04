const posts = require('../data/posts.js');

const index = (req, res) => {
  res.send("Elenco dei post");
}

const show = (req, res) => {
  res.send(`Dettaglio del post con id:${req.params.id}`);
}

const store = (req, res) => {
  res.send("Creazione nuovo post");
}

const update = (req, res) => {
  res.send(`Modifica totale al post con id:${req.params.id}`);
}

const modify = (req, res) => {
  res.send(`Modifica parziale al post con id:${req.params.id}`);
}

const destroy = (req, res) => {
  res.send(`Eliminazione del post con id:${req.params.id}`);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}