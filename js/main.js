class Main {
  constructor() {
    this.navToggler = document.getElementById("menu__button");
    this.navOptions = document.querySelectorAll(".menu li");
    this.menu = document.querySelector(".menu");
    this.backdrop = document.getElementById("backdrop");

    this.menu.addEventListener("click", this.navigatorToggler.bind(this));
    this.backdrop.addEventListener("click", this.navigatorToggler.bind(this));
  }

  navigatorToggler(event) {
    switch (event.target.id || event.target.tagName) {
        case "menu__button":
        case "backdrop":
        case "menu__option":
        case "A":
        case "ION-ICON":
        this.menu.classList.toggle("active");
        this.backdrop.classList.toggle("active");
        break;
      default:
        return;
    }
  }
}

new Main();
