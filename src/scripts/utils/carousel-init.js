const Carousel = {
    async init({Siema, previous, next, indicator, target}) {
        this._Siema = Siema
        const carousel = new this._Siema({
            selector: target,
            loop: true,
            duration: 450
        });
        this._prevButton = previous;
        this._nextButton = next;
        this._indicatorButton = indicator;

        // Controller
        this._prevButton.addEventListener('click', () => carousel.prev());
        this._nextButton.addEventListener('click', () => carousel.next());

        this._initIndicator(carousel);
    },

    async _initIndicator(carousel) {
        const dotButtons = this._indicatorButton.querySelectorAll("button");

        for (const [index, element] of dotButtons.entries()) {
            element.addEventListener('click', () => carousel.goTo(index));
        }
    }
};

export default Carousel;