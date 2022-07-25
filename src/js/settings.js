export const select = {
  cartCoffe : '#template-products',
  coffeContainer: '[data-container="coffeContainer"]',
  product: '#product',
  contact: '#form',
  startingPages: '#product, #form',
  home: '#home',
  footer: 'footer',
  about:'#about',
  pages: '#home, #product, #form',
  links: '.nav-link',
  hidden: 'hidden',
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    data: 'data',
  }
};


export const templates = {
  cartProducts: Handlebars.compile(document.querySelector(select.cartCoffe).innerHTML),
};