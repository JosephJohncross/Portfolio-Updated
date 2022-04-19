class Main {
    constructor() {
        this.navToggler = document.querySelector('.menu__button');
        this.menu = document.querySelector('.menu');
        this.backdrop = document.querySelector('.backdrop');

        this.navToggler.addEventListener('click', this.navigatorToggler.bind(this));
        this.backdrop.addEventListener('click', this.navigatorToggler.bind(this));
    }

    navigatorToggler() {
        this.menu.classList.toggle('active');
        this.backdrop.classList.toggle('active');
    }
}

new Main();