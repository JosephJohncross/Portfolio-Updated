export class About{
    constructor() {
        const subtitleMe = document.querySelector('.subtitle__me');
        const education = document.querySelector('.subtitle__education');
        const experience  = document.querySelector('.subtitle__experience');

        this.subtitleMeContent = document.querySelector('.subtitle__content__me');
        this.educationContent = document.querySelector('.subtitle__content__education');
        this.experienceContent = document.querySelector('.subtitle__content__experience');

        subtitleMe.addEventListener('click', this.slideSubtitleHandler.bind(this,this.subtitleMeContent,this.educationContent, this.experienceContent));
        education.addEventListener('click', this.slideSubtitleHandler.bind(this,this.educationContent, this.subtitleMeContent, this.experienceContent));
        experience.addEventListener('click', this.slideSubtitleHandler.bind(this,this.experienceContent, this.educationContent, this.subtitleMeContent));
    }

    slideSubtitleHandler(currentDisplay, slider1, slider2) {
        let subtitleIndicator =  document.querySelector('.subtitle--indicator');
        subtitleIndicator.style.width = currentDisplay.offsetWidth;
        subtitleIndicator.style.height = currentDisplay.offsetHeight;
        subtitleIndicator.style.top = currentDisplay.offsetTop;
        console.log(`width:${ currentDisplay.offsetWidth}, ${currentDisplay.offsetHeight},${currentDisplay.offsetTop}`)
        if (!currentDisplay.style.display === "none"){
            return
        }
        else{
            console.log("Entered the else block")
            currentDisplay.style.display = "block";
            currentDisplay.style.transform = "translateY(0px)";
            slider1.style.display = "none";
            slider1.style.transform = "translateY(400px)";
            slider2.style.display = "none";
            slider2.style.transform = "translateY(400px)";
        }
    }

}