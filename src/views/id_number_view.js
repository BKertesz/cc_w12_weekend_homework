const PubSub = require('../helpers/pub_sub.js')

class IdNumberView{

  constructor(input){
    this.input = input;
  }

  bindEvents(){
    this.setupInputListener()
  }

  setupInputListener(){
    this.input.addEventListener('submit',this.handleInput)
  }

  handleInput(evt){
    evt.preventDefault()
    console.log(evt.target.number_input.value)
    // PubSub.publish('IdNumberView:number-inputted',evt.target.value)
  }

}

module.exports = IdNumberView;
