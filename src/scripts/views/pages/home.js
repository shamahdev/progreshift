const Home = {
  async render() {
    return `
        <div class="home-header ">
          <div class="container home d-flex">
            <div class="head-description">
              <h2 class="white-text center ">Kita Bisa Kita Hebat</h2>
              <div class="menu-nav d-flex">
                <div class="menu-button">
                  <a class="button">01 Pandemi</a>
                </div>
                <div class="menu-button">
                  <a class="button">01 Pandemi</a>
                </div>
                <div class="menu-button">
                  <a class="button">01 Pandemi</a>
                </div>
              </div>
            </div>
            <div class="hero">
              <img alt="" src="./image/tech.png" class="img-hero">
            </div>
          </div>
        </div>
      `;
  },
  
  async afterRender() {
    // Write after render here.
  },
};

export default Home;
