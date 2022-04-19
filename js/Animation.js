const title = document.querySelectorAll(".title");
const skillContainer = document.querySelector(".skills__container");
const skillTitle = document.querySelector(".skills .title");
const subTitle = document.querySelector('.subtitle');
const subTitleSelection = document.querySelectorAll('.subtitle span');

console.log(title);
document.addEventListener("scroll", () => {
  for (let item of title) {
    if (item.getBoundingClientRect().top === 0) {
      if (item.classList.contains("top")) {
        return;
      }
      item.classList.add("top");
    } else {
      if (item.classList.contains("top")) {
        item.classList.remove("top");
        return;
      }
    }
  }
});

skillContainer.addEventListener("mouseover", (event) => {
  let target = event.target;
  if (!(target.classList.contains("skill") || target.classList.contains('skill--image'))) {
    skillTitle.innerHTML = "Skills";
    return;
  }
  skillTitle.innerHTML = target.closest('.skill').dataset.skill;
});

skillContainer.addEventListener("mouseout", (event) => {
  skillTitle.innerHTML = "Skills";
});

subTitle.addEventListener('click', (event) => {
    let target = event.target;
    if (target.nodeName != "SPAN"){
        return;
    }
    for (let node of subTitleSelection){
        if (node.classList.contains('active')){
            node.classList.remove('active')
        }
        target.classList.add('active');
    }
})