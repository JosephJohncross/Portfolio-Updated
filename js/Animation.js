const title = document.querySelectorAll('.title');
const skillContainer = document.querySelector('.skills__container');
const skillTitle = document.querySelector('.skills .title');

console.log(title);
document.addEventListener('scroll', () => {
    for (let item of title) {
        if (item.getBoundingClientRect().top === 0){
            if (item.classList.contains('top')){
                return;
            }
            item.classList.add('top');
        }
        else{
            if (item.classList.contains('top')){
                item.classList.remove('top');
                return;
            }
        }
    }
})

skillContainer.addEventListener('mouseover', (event) => {
    let target = event.target;
    console.log(target)
    if (!target.classList.contains('skill')){
        skillTitle.innerHTML = "Skills"
        return;
    }
    skillTitle.innerHTML = target.dataset.skill;
})

skillContainer.addEventListener('mouseout', (event) => {
    skillTitle.innerHTML = "Skills";
})


