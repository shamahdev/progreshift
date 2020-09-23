const Home = {
  async render() {
    return `
        <div class="home-header">
          <div class="container home d-flex">
            <div class="description">
              <h2 class="white-text center ">Kita Bisa Kita Hebat</h2>
              <div class="menu-nav d-flex margin-top-2">
                <a class="menu-button">
                  <p class="semibold">01</p>
                  <p>Pandemi</p>
                </a>
                <a class="menu-button">
                  <p class="semibold">01</p>
                  <p>Pandemi</p>
                </a>
                <a class="menu-button">
                  <p class="semibold">01</p>
                  <p>Pandemi</p>
                </a>
              </div>
            </div>
            <div class="hero">
              <img alt="" src="./image/rocketman.png" class="img-hero">
              <img alt="" src="./image/Vector 3.png" style="z-index: 0;" class="wave">
            </div>
          </div>
        </div>
        <div class="home-section-2 d-flex container">
          <div class="description">
            <h2 class="p-10">Pandemi Covid-19</h2>
            <p class="p-10">Kasus positif COVID-19 di Indonesia pertama kali dideteksi pada 2 Maret 2020, ketika dua orang
              terkonfirmasi tertular dari seorang warga negara Jepang.
              Sampai saat ini Indonesia telah termasuk negara dengan tingkat kasus positif terbanyak kedua terbanyak di
              Asia Tenggara setelah Filipina. </p>
          </div>
          <div class="chart">
            <img alt="" src="./image/chartcoba.png" class="img-hero">
          </div>
        </div>
      `;
  },
  
  async afterRender() {
    // Write after render here.
  },
};

export default Home;
