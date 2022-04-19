import {About} from "./About.js"

class Card {
  constructor() {
    this.container = document.querySelector(".container");
    this.projects = document.getElementById("projects");
    this.projectCatalog = document.querySelector(".projects-catalog");
    this.left = document.querySelector(".left");
    this.right = document.querySelector(".right");
    this.translate = 0;
    this.left.addEventListener("click", this.leftNavigationHandler.bind(this));
    this.right.addEventListener(
      "click",
      this.rightNavigationHandler.bind(this)
    );
    new About();
  }

  leftNavigationHandler() {
    let parentLeft = this.container.getBoundingClientRect().left;
    let projectLeft = this.projectCatalog.getBoundingClientRect().left;

    if (projectLeft === parentLeft) {
      console.log("Reached left")
      this.left.style.color = "gray";
      return;
    }

    this.translate += 340;
    this.projectCatalog.style.transform = `translateX(${this.translate}px)`;
    this.right.style.color = "#c71781";
  }
  rightNavigationHandler() {
    let projectCatalog = this.projectCatalog.getBoundingClientRect();
    let parentRight =
      this.container.getBoundingClientRect().left + this.container.offsetWidth;
    let projectLeft = this.projectCatalog.offsetWidth + projectCatalog.left + 4;

    if (Math.round(projectLeft) <= Math.round(parentRight)) {
      this.right.style.color = "gray";
      console.log("Reached right")
      return;
    }
    this.translate -= 340;
    this.projectCatalog.style.transform = `translateX(${this.translate}px)`;
    this.left.style.color = "#c71781";
  }
}

new Card();
