import AOS from 'aos';
import Swal from 'sweetalert2';

const Gallery = {
  async render() {
    return `
       <div class="header gallery">
         <div class="container gallery-header-container d-flex">
           <div class="description">
             <h2 class="gallery-header-text">Galeri<br>Inspiratif</h2>
             <a href="#gallery/lastImg" class="scroll-button">Lihat Galeri</a>
           </div>
           <div class="hero">
             <img alt="" data-aos="fade-down-right" src="./image/galleryhero.png" class="gallery-hero p-4 ">
             <a href="#gallery/lastImg" class="scroll-button phone-button-only mb-3">Lihat Galeri</a>
           </div>
           <div class="social-aside">
           <a data-aos="zoom-out" href="http://hiedescom.com/" target="_blank" rel="noopener" class="material-icons">public</a>
           <a data-aos="zoom-out" data-aos-delay="100" href="https://www.facebook.com/sharer/sharer.php?u=http://progreshift.web.app/" target="_blank" rel="noopener" class="material-icons">facebook</a>
           <button data-aos="zoom-out" data-aos-delay="200" id="copyClipboard" class="material-icons">share</button>
        </div>
         </div>
       </div>
       <h2 class="center mt-8 mb-8" id="gallery">Kumpulan Karya</h2>
       <div class="gallery container mt-3 d-flex">
         <div class="gallery-item" data-aos="zoom-in">
           <img class="gallery-photo" src="./image/gallery/1.jpeg">
           <div class="p-2">
             <p class="medium">Wedha Pop Art Portrait</p>
             <p>Shaddam Amru H</p>
           </div>

         </div>
         <div class="gallery-item" data-aos="zoom-in" data-aos-delay="100">
           <img class="gallery-photo" src="./image/gallery/2.jpeg">
           <div class="p-2">
           <p class="medium">COVID-19 Infographic Design</p>
           <p>M Rifki Erlangga</p>
           </div>
         </div>
         <div class="gallery-item" data-aos="zoom-in" data-aos-delay="200">
           <img class="gallery-photo" src="./image/gallery/3.png">
           <div class="p-2 ">
           <p class="medium">Poster Design</p>
           <p>Candra Miftah F</p>
           </div>
         </div>
         <div class="gallery-item" data-aos="zoom-in" data-aos-delay="300">
           <img class="gallery-photo" src="./image/gallery/4.jpeg">
           <div class="p-2 ">
             <p class="medium">Mobile App UI/UX</p>
             <p>Shaddam Amru Hasibuan</p>
           </div>
         </div>
         <div class="gallery-item" data-aos="zoom-in" data-aos-delay="400">
           <img class="gallery-photo" src="./image/gallery/5.jpg">
           <div class="p-2 ">
             <p class="medium">Company Web Profile</p>
             <p>M Rifki Erlangga</p>
           </div>
         </div>
         <div id="gallery/lastImg" class="gallery-item" data-aos="zoom-in" data-aos-delay="500">
           <img class="gallery-photo" src="./image/gallery/6.png">
           <div class="p-2 ">
             <p class="medium">Book Cover Design</p>
             <p>Candra Miftah F</p>
           </div>
         </div>
       </div>
       <div class="upload-gallery m-3 mt-8">
         <div class="upload-gallery-group p-4">
           <p class="medium center">Buat Dan Bagikan Karyamu Disini</p>
           <p class="center mt-2">Dengan membagikan karya mu disini, <br> kamu turut memajukan bangsa indonesia untuk
             lebih baik </p>
           <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqqNq-HOTlq6hZdQlqwyKDJn-4zpslhxB80j0Shrk9q0CJ1w/viewform?entry.358281074" target="_blank" rel="noopener" class="upload-gallery-button mt-4 center">Bagikan Karya</a>
         </div>
       </div>
       <div class="footer mt-10">
         <p class="white-text footer-text">Copyright © 2020 - Progreshift by Ahigacha</p>
       </div>
      `;
  },

  async afterRender() {
    AOS.init();

    document.querySelector('#copyClipboard').addEventListener('click', () => {
      copyTextToClipboard('progreshift.web.app');
      Swal.fire({
        title: 'Tautan telah dicopy kedalam Clipboard',
        text: 'Klik untuk kembali',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    })
  }
};

export default Gallery;
