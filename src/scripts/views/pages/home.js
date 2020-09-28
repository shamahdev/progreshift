import Swal from 'sweetalert2';
import Siema from "siema";
import Carousel from "../../utils/carousel-init";
import CareerSlider from "../../utils/career-slide-init";
import tippy from 'tippy.js';
import chartBar from '../../utils/chart-bar-init';
import AOS from 'aos';
import copyTextToClipboard from '../../helpers/copy-to-clipboard';

const Home = {
  async render() {
    return `
        <div class="header home">
          <div class="container home d-flex">
            <div class="description">
              <h2 class="home-header-text">Kita Bisa<br>Kita Hebat!</h2>
              <div class="menu-nav">
                <a href="#" data-aos="zoom-in" class="menu-button active">
                  <p class="semibold">01</p>
                  <p class="desc">Pandemi</p>
                </a>
                <a href="#newNormal" data-aos="zoom-in" data-aos-delay="100"class="menu-button">
                  <p class="semibold">02</p>
                  <p class="desc">New Normal</p>
                </a>
                <a href="#karirKu" data-aos="zoom-in" data-aos-delay="200" class="menu-button">
                  <p class="semibold">03</p>
                  <p class="desc">Pilihan Karir</p>
                </a>
              </div>
            </div>
            <div class="hero">
              <img alt="" data-aos="fade-down-right" src="./image/rocketman.png" class="max-img">
              <img alt="" src="./image/Vector 3.png" class="wave">
            </div>
            <div class="social-aside">
              <a data-aos="zoom-out" href="http://hiedescom.com/" target="_blank" rel="noopener" class="material-icons">public</a>
              <a data-aos="zoom-out" data-aos-delay="100" href="https://www.facebook.com/sharer/sharer.php?u=http://progreshift.web.app/" target="_blank" rel="noopener" class="material-icons">facebook</a>
              <button data-aos="zoom-out" data-aos-delay="200" id="copyClipboard" class="material-icons">share</button>
            </div>
          </div>
        </div>
        <section class="container">
          <div class="section-description">
            <h2 class="p-2" data-aos="fade-right">Pandemi Covid-19</h2>
            <p class="p-2" data-aos="fade-right" data-aos-delay="100">Kasus positif COVID-19 di Indonesia pertama kali dideteksi pada 2 Maret 2020, ketika dua orang
              terkonfirmasi tertular dari seorang warga negara Jepang.
              Sampai saat ini Indonesia telah termasuk negara dengan tingkat kasus positif terbanyak kedua terbanyak di
              Asia Tenggara setelah Filipina. </p>
          </div>
          <div class="wrapper">
            <div class="chart" data-aos="fade-up">
              <div class="chart-header">
                <h3 class="chart-title">Negara Asia</h3>
                <p class="time">22 September</p>
              </div>
              <div class="chart-content">
                <div class="tab">
                  <button class="active">Kasuk Terkonfirmasi dan Korban Meninggal</button>
                </div>
                <div class="chart-bar">
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="container reverse">
            <div class="industry-group">
              <button data-aos="zoom-out" class="industry-icon green" data-tippy-content="2. hotel" >
                <span class="material-icons-outlined">
                    hotel
                  </span>
              </button>
              <button data-aos="zoom-out" data-aos-delay="100" class="industry-icon blue" data-tippy-content="1. pariwisata">
                <span class="material-icons-outlined">
                  flight
                </span>
              </button>
              <button data-aos="zoom-out" data-aos-delay="200" class="industry-icon primary" data-tippy-content="3. otomotif">
                <span class="material-icons-outlined">
                  commute
                </span>
              </button>
              <button data-aos="zoom-out" data-aos-delay="300" class="industry-icon darkpurple" data-tippy-content="4. pakaian">
                <span class="material-icons-outlined">
                  checkroom
                </span>
              </button>
            </div>
            <div class="section-description left-margin">
              <h2 class="p-2" data-aos="fade-up">Industri Paling Terdampak</h2>
              <p class="p-2" data-aos="fade-up" data-aos-delay="100">Pandemi virus Corona telah mengubah bagaimana orang bekerja, belajar, memenuhi kebutuhan sehari-hari, bahkan berinteraksi. Industri mulai dituntut mengembangkan model yang lebih sustainable di tengah pandemi Covid-19.
              Dilansir dari www.wartaekonomi.co.id, Sektor Hotel dan Pariwisata
              menjadi sektor pertama yang merasakan keterpurukan.</p>
            </div>
        </section>
        <section id="newNormal" class="container hero-wrapper">
          <img alt="" src="./image/new normal 1.png" class="section-img">
        </section>
        <div class="home-section-video">
          <div class="video-container">
            <div class="video-controller">
              <button id="prevButton" class="material-icons">chevron_left</button>
              <button id="nextButton" class="material-icons">chevron_right</button>
            </div>

            <div class="siema">
              <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/kCgpxB37_7o" loading="lazy" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
              </div>
              <div class="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tTNQjND_WJE" loading="lazy" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
              </div>
              <div class="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3V_FWvBocuQ" loading="lazy" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
              </div>
            </div>
            <div class="video-indicator">
              <button class="dot"></button>
              <button class="dot"></button>
              <button class="dot"></button>
            </div>
          </div>
        </div>
        <section class="container"> 
          <div class="industry-hero">
            <img alt="" src="./image/industry 1.png" class="max-img">
          </div>
          <div class="section-description left-margin">
            <h2 class="p-2" data-aos="fade-right">Industri di Era New Normal</h2>
            <p class="p-2" data-aos="fade-right" data-aos-delay="100">Menperin menyebutkan, saat ini juga telah terjadi berbagai tatanan baru dalam aktivitas industri. Misalnya, sebelum pandemi Covid-19, industri yang beroperasi dapat mengoptimalkan 100 persen atau seluruh pekerjanya. Namun, dengan penerapan protokol kesehatan seperti aturan physical distancing, industri melakukan penyesuaian karyawannya hingga 50 persen.</p>
            <p class="p-2" data-aos="fade-right" data-aos-delay="200">Tidak hanya itu, sebagian industri juga mengalami perlambatan atau penurunan utilitas akibat dampak pandemi Covid-19, sehingga pemenuhan kapasitas terpasang berkisar antara 20-30 persen. Namun, bagi mereka yang masih mendapat izin beroperasi, penerapan protokol kesehatan harus tetap diutamakan.</p>
          </div>
        </section>
        <section class="container flex-column">
        <h2 class="p-2 pb-5 center">Apa Kata Mereka?</h2>
        <div class="video-container">
          <div class="video-controller2">
            <button id="prevButton2" class="material-icons">chevron_left</button>
            <button id="nextButton2" class="material-icons">chevron_right</button>
          </div>
          <div class="siema2">
            <div class="people-card">
              <img class="avatar" src="./image/adib-khomadi.png" alt="">
              <p class="quotes">
                "Masyarakat harusnya saat ini tidak usah memikirkan kapannya (berakhir pandemi Covid-19). Tetapi sekarang bagaimana kita harus mengubah pola hidup, menjaga diri kita agar berdamai dan tidak terinfeksi Covid-19 ini"
              </p>
              <p class="signature">
              dr. M. Adib Khumaidi, Sp.OT
              <span>Wakit Ketua Umum IDI</span>
              </p>
            </div>
            <div class="people-card">
              <img class="avatar" src="./image/anton-setyawan.png" alt="">
              <p class="quotes">
                "Kita lihat banyak bisnis yang mengalami dampak sangat signifikan selama pandemi ini kebanyakan bisnis tersebut bergerak di bidang jasa, seperti pariwisata, perhotelan, kuliner, ritel offline, dam event organizer"
              </p>
              <p class="signature">
              Prof. Dr. Anton Setyawan, SE, MSi
              <span></span>
              </p>
            </div>
            <div class="people-card">
              <img class="avatar" src="./image/wiku-adisasmito.png" alt="">
              <p class="quotes">
                "Memang kalau kita amati, Covid-19 ini telah membawa pengaruh juga perubahan terhadap sendi-sendi kehidupan ekonomi dan masyarakat. Dalam situasi pandemi Covid-19, roda perekonomian harus tetap berjalan dengan mengedepankan langkah-langkah pencegahan"
              </p>
              <p class="signature">
              Wiku Adisasmito
              <span>Juru Bicara Covid-19</span>
              </p>
            </div>
          </div>
          <div class="video-indicator indicator-space">
            <button class="dot"></button>
            <button class="dot"></button>
            <button class="dot"></button>
          </div>
        </div>
        </section>
        <div class="home-section-job">
          <div class="wrapper container">
            <div class="section-description">
              <h2 class="p-2 white-text">Pilihanmu Menentukan<br> Masa Depanmu!</h2>
            </div>
            <img src="./image/Rectangle.png">
          </div>
          <div id="karirKu" class="card-container">
            <div class="industry-card" data-aos="fade-up">
              <div class="card-carousel">
              </div>
              <div class="carousel-controller">
                <button id="prevButton3" class="material-icons">chevron_left</button>
                <button id="nextButton3" class="material-icons">chevron_right</button>
              </div>
              <div class="card-detail">
                <h2 id="cardName" class="p-2">Bisnis Online</h2>
                <p id="cardDesc" class="p-2">Tidak dapat dipungkiri lagi bahwa bisnis online ini memang suatu alternatif untuk menghadapi masalah pandemi ini. Dengan menjalankan pekerjaan ini kamu dapat menjadi...  </p>
                <button id="cardButton" class="button-detail">Lihat Detail</button>
              </div>
            </div>
          </div>
        </div>
        <section class="home-section-remember container flex-column center">
          <p class="p-2 medium">Jangan lupa Untuk:</p>
          <h2 class="p-2">Memakai Masker</h2>
          <div class="remember-option">
            <button data-aos="zoom-in" class="active" data-text="Memakai Masker">
              <span class="material-icons-outlined">
              masks
              </span>
            </button>
            <button data-aos="zoom-in" data-aos-delay="100" data-text="Mencuci Tangan">
              <span class="material-icons-outlined">
                wash
              </span>
            </button>
            <button data-aos="zoom-in" data-aos-delay="200" data-text="Menjaga Jarak">
              <span class="material-icons-outlined">
              6_ft_apart
              </span>
            </button>
          <div>
        </section>
        <div class="navigate-bottom center">
          <p class="medium">Navigate To</p>
          <a href="#/tips" data-aos="fade-up" class="bottom-nav">Lihat Tips di era New Normal<span class="material-icons">chevron_right</span></a>
          <a href="#/about" data-aos="fade-up" data-aos-delay="100" class="bottom-nav">Tentang Pengembang Web<span class="material-icons">chevron_right</span></a>
          <a href="#/gallery" data-aos="fade-up" data-aos-delay="200" class="bottom-nav">Galeri Inspiratif<span class="material-icons">chevron_right</span></a> 
        </div>
        <div class="comment-section container">
          <p class="center medium">Beri Kami Kritik & Saran</p>
          <div data-aos="zoom-out" class="form-comment-container container p-3 d-flex">
            <div class="comment-hero">
              <img alt="" src="./image/rocketman.png" class="max-img">
            </div>
            <div class="comment-form">
              <input required type="text" class="comment-input p-2" placeholder="Nama Lengkap">
              <input required type="text" class="comment-input p-2 mt-3" placeholder="Alamat Email">
              <textarea required type="text" class="comment-input text-field p-2 mt-3" rows="6" placeholder="Tuliskan Komentar"></textarea>
            </div>
            <div class="button-form">
              <button id="fakeForm" class="button send-comment white-text">Kirim Komentar</button>
            </div>
          </div>
        </div>
        <div class="footer mt-10">
          <p class="white-text footer-text">Copyright © 2020 - Progreshift by Ahigacha</p>
        </div>
      `;
  },
  
  async afterRender() {
    AOS.init();
    tippy('[data-tippy-content]');

    document.querySelector('#copyClipboard').addEventListener('click', () => {
      copyTextToClipboard('progreshift.web.app');
      Swal.fire({
        title: 'Tautan telah dicopy kedalam Clipboard',
        text: 'Klik untuk kembali',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    })

    const prevButton = document.querySelector("#prevButton");
    const nextButton = document.querySelector("#nextButton");
    const indicatorButtons = document.querySelector(".video-indicator");
    Carousel.init({
      Siema: Siema,
      previous: prevButton, 
      next: nextButton,
      indicator: indicatorButtons,
      target: '.siema'
    });

    const prevButton2 = document.querySelector("#prevButton2");
    const nextButton2 = document.querySelector("#nextButton2");
    const indicatorButtons2 = document.querySelector(".indicator-space");

    Carousel.init({
      Siema: Siema,
      previous: prevButton2, 
      next: nextButton2,
      indicator: indicatorButtons2,
      target: '.siema2'
    });

    const prevButton3 = document.querySelector("#prevButton3");
    const nextButton3 = document.querySelector("#nextButton3");

    CareerSlider.init({
      Siema: Siema,
      previous: prevButton3, 
      next: nextButton3,
      target: '.card-carousel'
    });

    const fakeForm = document.querySelector("#fakeForm");
    fakeForm.addEventListener('click', () => {
      Swal.fire({
        title: 'Tanggapan telah dikirim',
        text: 'Klik untuk kembali',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    })

    this._initRememberTabOption();
    this._initChart();
  },
  _initRememberTabOption() {
    const rememberText = document.querySelector('.home-section-remember h2');
    const rememberButtons = document.querySelectorAll('.remember-option button');

    function activateRememberTab() {
      rememberButtons.forEach(button => {
        if(button.classList.contains("active")) {
          button.classList.remove("active");
        }
        this.classList.add("active");
        rememberText.innerHTML = this.dataset.text;
      });
    }

    rememberButtons.forEach(button => {
      button.addEventListener('mouseover', activateRememberTab);
    });
  },

  _initChart() {
    const chartBarElement = document.querySelector('.chart-bar');
    chartBar.init(tippy, chartBarElement);
  }
};

export default Home;
