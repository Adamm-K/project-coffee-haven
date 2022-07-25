import Products from './Products.js';
import { select } from './settings.js';

const app = {

  init: function () {
    const thisApp = this;

    new Products();
    thisApp.getElement();
    thisApp.initWebListener();
  },

  getElement: function () {
    const thisApp = this;

    thisApp.dom = {},
    thisApp.dom.pages = document.querySelectorAll(select.pages),
    thisApp.dom.contact = document.querySelector(select.contact),
    thisApp.dom.home = document.querySelector(select.home),
    thisApp.dom.product = document.querySelector(select.product);
  },

  initActivatingPage: function (pageId) {
    const thisApp = this;

    for (const page of thisApp.dom.pages) {
      page.classList.add(select.hidden);
    }
    for (const page of thisApp.dom.pages) {
      let webAttributes = page.getAttribute('id');
      if (webAttributes == pageId) {
        page.classList.remove(select.hidden);
      }
    }
  },

  initWebListener: function () {

    const thisApp = this;
    const links = document.querySelectorAll(select.links);

    for (const link of links) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const clickedElement = event.target.getAttribute('href').substring(1);
        thisApp.initActivatingPage(clickedElement);
      });
    }
  }
};

app.init();