const posts = require('../data/posts.js');

const index = (req, res) => {

  const title = req.query.title;

  let filteredPost = posts

  //verifico se name è definito o meno
  if (title) {
    filteredPost = posts.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
  }

  res.send(filteredPost);
}

const show = (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find(item => item.id === id);

  if (!post) {
    return res.status(404).json({ error: '404 Not Found', message: 'Post non trovato' })
  }

  res.json(post);
}

const store = (req, res) => {

  //creo un nuovo id
  const newId = posts[posts.length - 1].id + 1;

  //destrutturo il req.body
  const { title, content, image, tags } = req.body;


  //creo un nuovo oggetto post
  const newPost = {
    id: newId,
    title,
    content,
    image,
    tags
  }

  posts.push(newPost);

  res.status(201).json(newPost);

}

const update = (req, res) => {
  res.send(`Modifica totale al post con id:${req.params.id}`);
}

const modify = (req, res) => {
  res.send(`Modifica parziale al post con id:${req.params.id}`);
}

const destroy = (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find(item => item.id === id);

  if (!post) {
    return res.status(404).json({ error: '404 Not Found', message: 'Post non trovato' })
  }

  posts.splice(posts.indexOf(post), 1);

  res.sendStatus(204);


}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}