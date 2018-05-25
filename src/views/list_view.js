const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request_helper.js')
const DetailView = require('./detail_view.js')

class ListView{

  constructor(view){
    this.view = view;
  }

  bindEvents(){
    this.setupDisplayListener()
  }

  setupDisplayListener(){
    PubSub.subscribe('Pokemon:pokemon-ready',(evt)=>{
      this.render(evt.detail)
    })
  }

  render(data){
    const detail = new DetailView(data,this.view);
    detail.render();
  }



}

module.exports = ListView;
