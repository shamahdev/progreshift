import * as json from './../data/covid.json';
const chartBar = {

    async init(tippy, parent) {
        this._tippy = tippy;
        this._parent = parent;
        this._covidData = json.default.covid;

        this._covidData.forEach(data => {
            this._parent.innerHTML +=`<button data-country="${data.country}" data-confirmed="${data.confirmed}" data-death="${data.death}" data-height="${Math.floor(Math.random() * 10) + 1}"></button>`;
        });

        this._covidData.forEach((data) => {
            this._tippy(document.querySelector(`button[data-country="${data.country}"]`), {
                content: `<strong>${data.country}</strong><p>Terkonfirmasi: ${data.confirmed}</p><p>Meninggal: ${data.death}</p>`,
                allowHTML: true,
            });
        });

        
    }

}

export default chartBar;