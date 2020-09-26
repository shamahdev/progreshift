import UrlParser from '../routes/urlparser';
import Routes from '../routes/routes';
import NavigationDrawer from '../utils/navigation-drawer-init';

class App {
  constructor({hamburger, drawer, content}) {
    this._hamburger = hamburger;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    NavigationDrawer.init({
      hamburger: this._hamburger,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async loadPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = await Routes[url];
    try {
      this._content.innerHTML = await page.render();
      this._renderNavbar(url);
      await page.afterRender();
    } catch (err) {
      this._load404();
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  static async refreshPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = await Routes[url];
    await page.afterRender();
  }

  _renderNavbar(url) {
    const navbar = document.querySelector('nav');
    navbar.classList.remove('floating');
    navbar.classList.remove('floating2');
    navbar.classList.remove('floating3');
    if (url === '/tips') {
      navbar.classList.add('floating');
    } else if (url === '/about') {
      navbar.classList.add('floating3');
    } else if (url === '/gallery') {
      navbar.classList.add('floating2');
    } else {
      navbar.classList.add('floating');
    }
  }

  _load404() {
    return `
        <article id="main">
            <h2 class="center">Halaman tidak ditemukan</h2>
        </article>
      `;
  }
}

export default App;
