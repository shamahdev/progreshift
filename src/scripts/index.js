import 'regenerator-runtime';
import '../styles/main.sass';
import App from './views/app';

const app = new App({
  hamburger: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.loadPage();
});

window.addEventListener('load', () => {
  app.loadPage();
  // swRegister();
});

