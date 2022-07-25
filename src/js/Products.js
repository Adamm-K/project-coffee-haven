import { select, settings, templates } from './settings.js';
import utils from './utils.js';

class Products {
  constructor() {
    this.getData();
  }

  getData() {
    const thisProducts = this;
    const url =  settings.db.url + '/' + settings.db.data;
  
    fetch(url)
      .then(function(Response){
        return Response.json();
      })
      .then(function(data){
        const shopData = data;
        thisProducts.initPage(shopData);
      });
  }

  initPage(thisData) {

    const thisProduct = this;
    const generatedHTML = templates.cartProducts(thisData);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    const coffeContainer = document.querySelectorAll(select.coffeContainer);

    for (const coffes of coffeContainer) {
      coffes.appendChild(thisProduct.element.cloneNode(true));
    }
    const beginningSections = document.querySelectorAll(select.startingPages);

    for (const section of beginningSections) {
      section.classList.add(select.hidden);
    }
  }
}

export default Products;