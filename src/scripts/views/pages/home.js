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
                  <p class="semibold">02</p>
                  <p>New Normal</p>
                </a>
                <a class="menu-button">
                  <p class="semibold">03</p>
                  <p>Pilihan Karir</p>
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
            <h2 class="p-2">Pandemi Covid-19</h2>
            <p class="p-2">Kasus positif COVID-19 di Indonesia pertama kali dideteksi pada 2 Maret 2020, ketika dua orang
              terkonfirmasi tertular dari seorang warga negara Jepang.
              Sampai saat ini Indonesia telah termasuk negara dengan tingkat kasus positif terbanyak kedua terbanyak di
              Asia Tenggara setelah Filipina. </p>
          </div>
          <div class="chart">
            <img alt="" src="./image/chartcoba.png" class="img-hero">
          </div>
        </div>
        <div class="home-section-3 d-flex container">
          <h2 class="p-2 industry-title">Industri Paling Terdampak </h2>
            <div class="industry-group p-2 d-flex">
              <a href="#" class="industry-icon green">
                <span class="material-icons-outlined ">
                  account_balance_wallet
                  </span>
              </a>
              <a href="#" class="industry-icon blue">
                <span  class="material-icons-outlined center" >
                  account_balance_wallet
                  </span>
              </a>
              <a href="#" class="industry-icon primary">
                <span class="material-icons-outlined">
                  account_balance_wallet
                  </span>
              </a>
              <a href="#" class="industry-icon darkpurple">
                <span class="material-icons-outlined">
                  account_balance_wallet
                  </span>
              </a>
            </div>
            <div class="description">
              <h2 class="p-2 industry-title-description">Industri Paling Terdampak </h2>
              <p class="p-2">Dilansir dari Kompasiana.com sektor pariwisata menjadi sektor yang paling terdampak. Hal ini disebakan </p>
            </div>
        </div>
        <div class="home-section-hero">
          <img alt="" src="./image/new normal 1.png"  style="margin-left:auto; margin-right:auto; display:block;">
        </div>
        <div class="home-section-video">
          <div class="carousel-container">
            <h2>slider</h2>
            <div class="carousel my-carousel carousel--translate">
              <input class="carousel__activator" type="radio" name="carousel" id="F" checked="checked"/>
              <input class="carousel__activator" type="radio" name="carousel" id="G"/>
              <input class="carousel__activator" type="radio" name="carousel" id="H"/>
              <input class="carousel__activator" type="radio" name="carousel" id="I"/>
              <input class="carousel__activator" type="radio" name="carousel" id="J"/>
              <div class="carousel__controls">
                <label class="carousel__control carousel__control--backward" for="J"></label>
                <label class="carousel__control carousel__control--forward" for="G"></label>
              </div>
              <div class="carousel__controls">
                <label class="carousel__control carousel__control--backward" for="F"></label>
                <label class="carousel__control carousel__control--forward" for="H"></label>
              </div>
              <div class="carousel__controls">
                <label class="carousel__control carousel__control--backward" for="G"></label>
                <label class="carousel__control carousel__control--forward" for="I"></label>
              </div>
              <div class="carousel__controls">
                <label class="carousel__control carousel__control--backward" for="H"></label>
                <label class="carousel__control carousel__control--forward" for="J"></label>
              </div>
              <div class="carousel__controls">
                <label class="carousel__control carousel__control--backward" for="I"></label>
                <label class="carousel__control carousel__control--forward" for="F"></label>
              </div>
              <div class="carousel__track">
                <li class="carousel__slide">
                  <h1>F</h1>
                </li>
                <li class="carousel__slide">
                  <h1>G</h1>
                </li>
                <li class="carousel__slide">
                  <h1>H</h1>
                </li>
                <li class="carousel__slide">
                  <h1>I</h1>
                </li>
                <li class="carousel__slide">
                  <h1>J</h1>
                </li>
              </div>
              <div class="carousel__indicators">
                <label class="carousel__indicator" for="F"></label>
                <label class="carousel__indicator" for="G"></label>
                <label class="carousel__indicator" for="H"></label>
                <label class="carousel__indicator" for="I"></label>
                <label class="carousel__indicator" for="J"></label>
              </div>
            </div>
          </div>
        </div>
        <div class="home-section-newnormal container d-flex"> 
          <div class="industry-hero">
            <img alt="" src="./image/industri 1 (1).png" class="img-hero">
          </div>
          <div class="description">
            <h2 class="p-2">Industri di Era New Normal</h2>
            <p class="p-2">Menperin menyebutkan, saat ini juga telah terjadi berbagai tatanan baru dalam aktivitas industri. Misalnya, sebelum pandemi Covid-19, industri yang beroperasi dapat mengoptimalkan 100 persen atau seluruh pekerjanya. Namun, dengan penerapan protokol kesehatan seperti aturan physical distancing, industri melakukan penyesuaian karyawannya hingga 50 persen.</p>
            <p class="p-2">Tidak hanya itu, sebagian industri juga mengalami perlambatan atau penurunan utilitas akibat dampak pandemi Covid-19, sehingga pemenuhan kapasitas terpasang berkisar antara 20-30 persen. Namun, bagi mereka yang masih mendapat izin beroperasi, penerapan protokol kesehatan harus tetap diutamakan.            </p>
          </div>
        </div>
      `;
  },
  
  async afterRender() {
    // Write after render here.
  },
};

export default Home;
