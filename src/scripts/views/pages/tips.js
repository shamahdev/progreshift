import * as json from './../../data/tips.json';
import Swal from 'sweetalert2';
import AOS from 'aos';

const Tips = {
    async render() {
      return `
      <div class="header tips">
      <div class="container gallery-header-container d-flex">
        <div class="description">
          <h2 class="gallery-header-text">Tips<sup>2</sup> Menghadapi  <br>New Normal</h2>
          <a href="#tips/lastTips" class="scroll-button">Lihat Tips</a>
        </div>
        <div class="hero">
          <img alt="" data-aos="fade-down-right" src="./image/tips hero.png" class="max-img">
          <a href="#tips/lastTips" class="scroll-button phone-button-only mb-3">Lihat Tips</a>
        </div>
        <div class="social-aside">
        <a data-aos="zoom-out" href="http://hiedescom.com/" target="_blank" rel="noopener" class="material-icons">public</a>
        <a data-aos="zoom-out" data-aos-delay="100" href="https://www.facebook.com/sharer/sharer.php?u=http://progreshift.web.app/" target="_blank" rel="noopener" class="material-icons">facebook</a>
        <button data-aos="zoom-out" data-aos-delay="200" id="copyClipboard" class="material-icons">share</button>
        </div>
      </div>
    </div>
    <div class="tips-container p-5">
      <div class="container p-3 white-background d-flex">
        <div class="form">
          <div id="tipsContent" class="wrapper">
          </div>
        </div>
        <div class="tips-hero">
          <div class="tips-hero-container" id="tips/lastTips">
            <img src="./image/tips hero2 (1).png">
          </div>
        </div>
      </div>
      <div class="upload-gallery m-3 mt-8">
        <div class="upload-gallery-group p-4">
          <p class="medium center">Buat Dan Bagikan Tipsmu Disini</p>
          <p class="center mt-2">Dengan membagikan Tips mu disini, <br> kamu turut memajukan bangsa indonesia untuk
            lebih baik </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqqNq-HOTlq6hZdQlqwyKDJn-4zpslhxB80j0Shrk9q0CJ1w/viewform?entry.358281074" target="_blank" rel="noopener" class="upload-gallery-button mt-4 center">Buat Tips</a>
        </div>
      </div>
    </div>
    <div class="footer">
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

      const tipsContent = document.getElementById('tipsContent');
      const tipsData = json.default.tips;

      tipsData.forEach(async (tips) => {
        tipsContent.innerHTML +=
          `<div id="tip${tips.id}" class="tips-item mt-2 d-flex" data-aos="fade-up" data-aos-delay="${(parseInt(tips.id)-1)*100} ">
          <div class="tips-icon" data-tippy-content="1. pariwisata">
            <span class="material-icons-outlined">
              info
            </span>
          </div>
          <div class="description p-2">
            <p class="medium tips-title">${tips.title}</p>
            <p class="mt-2 tips-description">${tips.caption.substr(0,64)}...</p>
          </div>
        </div>`;
      });

      tipsData.forEach(tips => {
        const selectorElement = document.querySelector(`#tip${tips.id}`);
        selectorElement.addEventListener('click', () => {
          Swal.fire({
            title: tips.title,
            width: 1024,
            text: tips.caption,
            html: tips.detail
          })
        })
      });
    },
  };
  
  export default Tips;
  