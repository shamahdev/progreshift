import Siema from "siema";
import Carousel from "../../utils/carousel-init";
import AOS from 'aos';

const About = {
  async render() {
    return `
    <section class="about-container"> 
        <div class="about-background"></div>
        <div class="about-hero" data-aos="zoom-in">
          <div class="img-carousel">
            <img alt="" src="./image/ahigacha.png" class="max-img">
            <img alt="" src="./image/ahigacha2.jpg" class="max-img">
            <img alt="" src="./image/ahigacha3.jpg" class="max-img">
          </div>
          <div class="img-controller">
            <button data-index="0" class="active" ></button><button data-index="1"></button><button data-index="2"></button>
          </div>
        </div>
        <div class="section-description left-margin">
          <h2 class="p-2" data-aos="fade-up">Ahigacha</h2>
          <p class="p-2" data-aos="fade-up" data-aos-delay="100">Ahigacha adalah tim yang berasal dari SMKN 1 Cimahi, tim ini awalnya terbentuk dari ketidak sengajaan dan keisengan dalam mengikuti lomba, tetapi seiring berjalannya waktu kami berkembang dengan meningkatkan chemistry dan tingkat kompetensi kami secara perlahan hingga sampai saat ini</p>
        </div>
    </section>
    <section class="container profile-section">
      <h2 class="center mt-8">Siapakah Kita?</h2>
      <div class="profile">
        <div class="profile-card" data-aos="fade-up">
          <img src="./image/shaddamah.png" alt="">
          <div class="profile-content">
            <p class="medium">Shaddam Amru H</p>
            <p>Front-end Developer</p>
            <p class="d-flex"><span class="mr-1 material-icons">email</span>shaddam.a.h@gmail.com</p>
          </div>
        </div>
        <div class="profile-card reverse" data-aos="fade-up" data-aos-delay="100">
          <img src="./image/rier.png" alt="">
          <div class="profile-content">
            <p class="medium">M Rifki Erlangga</p>
            <p>Front-end Developer</p>
            <p class="d-flex-reverse"><span class="ml-1 material-icons">email</span>rifkierlangga17@gmail.com</p>
          </div>
        </div>
        <div class="profile-card" data-aos="fade-up" data-aos-delay="200">
          <img src="./image/candra.png" alt="">
          <div class="profile-content">
            <p class="medium">Candra Miftah F</p>
            <p>UI/UX Designer</p>
            <p class="d-flex"><span class="mr-1 material-icons">email</span>candragain99@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
    <div class="section-end">
      <h2 class="center">Apa Kata Kita</h2>
      <div class="video-container">
          <div class="video-controller3">
            <button id="prevButton2" class="material-icons">chevron_left</button>
            <button id="nextButton2" class="material-icons">chevron_right</button>
          </div>
          <div class="siema2">
            <div class="people-card2">
              <img class="avatar" src="./image/shaddamah.png" alt="">
              <p class="quotes">
                "Menurut saya kuncinya adalah bersabar dan tetap mengikuti protokol kesehatan"
              </p>
            </div>
            <div class="people-card2">
              <img class="avatar" src="./image/rier.png" alt="">
              <p class="quotes">
                "Menurut Saya pandemi ini bukanlah masalah besar jika kita ingin meng-improve tingkat kompetensi keahlian kita"
              </p>
            </div>
            <div class="people-card2">
              <img class="avatar" src="./image/candra.png" alt="">
              <p class="quotes">
                "saat kondisi new normal seperti sekarang ini, dengan segala hambatan dan rintangan, kita harus tetap memaksimalkan usaha dan doa untuk menghadapi segala kemungkinan yang akan terjadi kedepannya, tetap berfikir positif, dan utamakan kesehatan."
              </p>
            </div>
          </div>
          <div class="video-indicator indicator-space">
            <button class="dot"></button>
            <button class="dot"></button>
            <button class="dot"></button>
          </div>
        </div>
    </div>
    <div class="footer2">
      <p class="white-text footer-text">Copyright © 2020 - Progreshift by Ahigacha</p>
    </div>
      `;
  },

  async afterRender() {
    AOS.init();
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

    this._initGalleryCarousel();
  },

  _initGalleryCarousel() {
    const target = document.querySelector('.img-carousel');
    const tabButtons = document.querySelectorAll('.img-controller button');
    const carousel = new Siema({
      selector: target,
      duration: 450
    });
    
    function activateSlider() {
      for (const [index, element] of tabButtons.entries()) {
        if(element.classList.contains("active")) {
          element.classList.remove("active");
        }
      }
      this.classList.add("active");
      carousel.goTo(this.dataset.index);
    }

    tabButtons.forEach(button => {
      button.addEventListener('mouseover', activateSlider);
    });
  },
};

export default About;
