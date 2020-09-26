import Swal from 'sweetalert2';
import * as json from './../data/career.json';

const CareerSlider = {
    async init({Siema, previous, next, target}) {
        this._careerData = json.default.career;
        this._Siema = Siema;
        this._target = target;
        this._prevButton = previous;
        this._nextButton = next;

        this._careerData.forEach(data => {
            const targetElement = document.querySelector(this._target);
            targetElement.innerHTML +=
            `<img class="thumbnail" src="./image/career/${data.pictureId}.png" alt="${data.name}">`;
        });   
        this._initCarousel();
    },

    _initCarousel(){
        const careerData = this._careerData;
        const title = document.querySelector("#cardName");
        const desc = document.querySelector("#cardDesc");
        const button = document.querySelector("#cardButton");
        function _renderCard() {
            console.log(this.currentSlide);
            careerData.forEach(data => {
                if(data.id == this.currentSlide) {
                    title.innerHTML = data.name;
                    desc.innerHTML = data.caption;

                    button.addEventListener('click', () => {
                        Swal.fire({
                            title: data.name,
                            width: 1024,
                            text: data.caption,
                            html: data.detail
                        })
                    })
                }
            });
        }

        const carousel = new this._Siema({
            selector: this._target,
            loop: true,
            duration: 450,
            onInit: _renderCard,
            onChange: _renderCard
        });

        this._prevButton.addEventListener('click', () => carousel.prev());
        this._nextButton.addEventListener('click', () => carousel.next());
    },

    _renderCard(){
        const title = document.querySelector("#cardName");
        const desc = document.querySelector("#cardDesc");
        const button = document.querySelector("#cardButton");

        this._careerData.forEach(data => {
            if(data.id == this._carousel.currentSlide) {
                title.innerHTML = data.name;
                desc.innerHTML = data.caption;
            }
        });
    },
    _initEvent(){
        const carousel = new this._Siema({
            selector: target,
            loop: true,
            duration: 450
        });
    }
};






export default CareerSlider;