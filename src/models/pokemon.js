const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request_helper.js')


class Pokemon{
  constructor(){
    this.allPokemon = null;
  }

  bindEvents(){
    this.setupIDListener();
  }

  getByIDPokemonData(id){
    // console.log(id);
    const request = new Request(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    request.get((data)=>{
      this.publishPokemonData(data);
    })
  }

  setupIDListener(){
    PubSub.subscribe('IdNumberView:number-inputted',(evt)=>{
      this.getByIDPokemonData(evt.detail)
      // console.log(evt.detail);
    })
  }

  publishPokemonData(data){
    PubSub.publish('Pokemon:pokemon-ready',data);
  }

}

module.exports = Pokemon;
