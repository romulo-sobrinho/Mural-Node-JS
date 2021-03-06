module.exports = {
  posts: [
    {
      id: "1a2b",
      title: "teste do mural",
      description: "Descrição teste"
    }
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    this.posts.push({id: generateID(), title, description});
  },

  deletePost(id) {
    let indexDelete = this.posts.findIndex(post => post.id === id);
    this.posts.splice(indexDelete, 1);
  },

  changePost(id, titleUpdate, descriptionUpdate) {
    let indexChange = this.posts.findIndex(post => post.id === id);
    this.posts[indexChange].title = titleUpdate;
    this.posts[indexChange].description = descriptionUpdate;
  }
}


function generateID() {
  return Math.random().toString(36).substr(2,9);
  /* Esse número é a base, por exemplo base decimal é 10, base
  hexadecimal é 16, utilizando 32 vai ter mais letras envolvidas
  Esse substr 2 é pra pegar o número após a vírgula e 9 representa
  que após a vírgula vai pegar 9 números, pois sem isso o número será
  assim: 0.0214DGDE65684e5f4DF*/
}