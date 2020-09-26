import UrlParser from '../routes/urlparser';

const NavigationDrawer = {
  _body: document.querySelector('body'),
  _maxDrawerSize: window.matchMedia('(max-width: 719px)'),

  async init({hamburger, drawer, content}) {
    this._hamburger = hamburger;
    this._drawer = drawer;
    this._content = content;
    this._navigationLinks = this._drawer.querySelectorAll('a');

    this._hamburger.addEventListener('click', this._toggleDrawer.bind(this));
    this._content.addEventListener('click', this._closeDrawer.bind(this));
    this._navigationLinks.forEach((element) => {
      element.addEventListener('click', this._checkRoute.bind(this));
    });

    window.onscroll = () => this._styleEvent(document.querySelector('nav'));

    this._checkRoute();
  },

  _checkRoute() {
    setTimeout(() => {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const navigationLinks = this._navigationLinks;

      navigationLinks.forEach((element) => {
        if (element.classList.contains('active')) {
          element.classList.remove('active');
        }
      });

      if (url === '/tips') {
        navigationLinks[1].classList.add('active');
      } else if (url === '/about') {
        navigationLinks[2].classList.add('active');
      } else if (url === '/gallery') {
        navigationLinks[3].classList.add('active');
      } else {
        navigationLinks[0].classList.add('active');
      }
    }, 100);
  },

  _styleEvent(navbar) {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      const url = UrlParser.parseActiveUrlWithCombiner();
      if (url === '/about') {
        navbar.classList.add('floating3-extended');
      }
    } else {
      if(navbar.classList.contains('floating3-extended')) {
        navbar.classList.remove('floating3-extended');
      }
    }
  },

  async _toggleDrawer(event) {
    event.stopPropagation();
    const body = this._body;
    const drawer = this._drawer;
    const maxDrawerSize = this._maxDrawerSize;

    if (maxDrawerSize.matches) {
      drawer.classList.toggle('open');
      body.classList.toggle('opened');
      this._createDrawerEvent(event);
    }
  },

  _closeDrawer(event) {
    event.stopPropagation();
    const body = this._body;
    const drawer = this._drawer;
    const maxDrawerSize = this._maxDrawerSize;

    if (maxDrawerSize.matches) {
      drawer.classList.remove('open');
      body.classList.remove('opened');
    }
    this._createDrawerEvent(event);
  },

  _createDrawerEvent(event) {
    event.stopPropagation();
    const maxDrawerSize = this._maxDrawerSize;
    const drawer = this._drawer;
    const hamburger = this._hamburger;
    const navigationLinks = this._navigationLinks;

    if (maxDrawerSize.matches) {
      if (drawer.classList.contains('open')) {
        this._accessibilityKey(navigationLinks);
        drawer.setAttribute('aria-hidden', false);
        hamburger.setAttribute('aria-expanded', true);
        hamburger.innerHTML = 'close';
        navigationLinks.forEach((element) => {
          element.addEventListener('click', this._closeDrawer.bind(this));
          element.tabIndex = '0';
        });
      } else {
        drawer.setAttribute('aria-hidden', true);
        hamburger.setAttribute('aria-expanded', false);
        hamburger.innerHTML = 'menu';
        navigationLinks.forEach((element) => {
          element.removeEventListener('click', this._closeDrawer.bind(this));
          element.tabIndex = '-1';
        });
      }
    } else {
      navigationLinks.forEach((element) => element.tabIndex = '0');
    }
  },

  _accessibilityKey(navigationLinks) {
    window.addEventListener('resize', this._closeDrawer.bind(this));
    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 27) {
        this._closeDrawer(event);
      } else if (event.keyCode === 9 && !event.shiftKey) {
        if (navigationLinks[navigationLinks.length - 1].matches(':focus')) {
          this._closeDrawer(event);
        }
      }
    });
  },
};

export default NavigationDrawer;
