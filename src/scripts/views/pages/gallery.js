const Gallery = {
  async render() {
    return `
       <div class="gallery-header">

       </div>
       <div class="gallery container d-flex">
        <div class="gallery-item">
          <img class="gallery-photo" src="./image/gallery/WhatsApp Image 2020-09-22 at 23.31.58.jpeg">
          <p>apawe</p>
          <p>apa?</p>
        </div>
        <div class="gallery-item">
          <img class="gallery-photo" src="./image/gallery/Artboard 1.png">
          <p>apawe</p>
          <p>apa?</p>
        </div>
        <div class="gallery-item">
          <img class="gallery-photo" src="./image/gallery/WhatsApp Image 2020-09-22 at 23.36.00.jpeg">
          <p>apawe</p>
          <p>apa?</p>
        </div>
        <div class="gallery-item">
          <img class="gallery-photo" src="./image/gallery/WhatsApp Image 2020-09-22 at 23.36.00.jpeg">
          <p>apawe</p>
          <p>apa?</p>
        </div>
        <div class="gallery-item">
          <img class="gallery-photo" src="./image/gallery/4.JPG">
          <p>apawe</p>
          <p>apa?</p>
        </div>
        <div class="gallery-item">
          <img class="gallery-photo" src="./image/gallery/4.JPG">
          <p>apawe</p>
          <p>apa?</p>
        </div>
       </div>
      `;
  },

  async afterRender() {
    // Write after render here.
  },
};

export default Gallery;
