const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request_helper.js')


class DetailView{

  constructor(pokemon,list){
    this.pokemon = pokemon;
    this.list = list;
  }

  render(){
    this.list.innerHTML = '';
    const name = document.createElement('p');
    name.textContent = this.pokemon.name;

    this.list.appendChild(name);
  }



}

module.exports = DetailView;
