const Pokemon = require('./models/pokemon.js')
const IdNumberView = require('./views/id_number_view.js')
const ListView = require('./views/list_view.js')

document.addEventListener('DOMContentLoaded',()=>{
  console.log("Javascript Loaded!")

  const listViewDOM = document.querySelector('#pokemon-display-list');
  const listView = new ListView(listViewDOM);
  listView.bindEvents();

  const pokemon = new Pokemon();
  pokemon.bindEvents();

  const inputField = document.querySelector('#number-input-form');
  const idNumberView = new IdNumberView(inputField);
  idNumberView.bindEvents();
})
