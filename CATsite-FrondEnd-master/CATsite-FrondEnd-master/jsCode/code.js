'use strict'
//...................variables
// ..........blog slider variable
const sliderParentBlog = document.querySelector('.slider-parent');
const indicatorsBlog = document.querySelectorAll('.indicator-blog');
const blogSliderWidth = sliderParentBlog.offsetWidth;
let NumOfblogSlide = 0;
//events slider variable
const sliderParentEvent = document.querySelector('.events-slider-parent');
const indicatorsEvent = document.querySelectorAll('.indicator-event');

const sliderParentProjects = document.querySelector('.projects-slider-parent');
const indicatorsProjects = document.querySelectorAll('.indicator-project');
const eventSliderWidth = sliderParentEvent.offsetWidth;
const projectSliderWidth = sliderParentProjects.offsetWidth;
let NumOfEventSlide = 0;
let NumOfProjectSlide = 0;
//.......................news letter layover
const subToNews = document.querySelector('.btn-newsletter');
const exit = document.querySelector('.exit');
const layover = document.querySelector('.lay1');
//.....................functions
//........ blog slider functions
const handlingScrollingBlog = function (i) {
    indicatorsBlog[NumOfblogSlide].classList.toggle('active');
    NumOfblogSlide = i;
    indicatorsBlog[NumOfblogSlide].classList.toggle('active');
    sliderParentBlog.scrollTo({
        left: NumOfblogSlide * blogSliderWidth,
        behavior:'smooth'
    })
}

//.....events slider function 
const handlingScrollingEvent = function (i) {
    indicatorsEvent[NumOfEventSlide].classList.toggle('active');
    NumOfEventSlide = i;
    indicatorsEvent[NumOfEventSlide].classList.toggle('active');
    sliderParentEvent.scrollTo({
        left: NumOfEventSlide * eventSliderWidth,
        behavior:'smooth'
    })
}

const handlingScrollingProject = function (i) {
    indicatorsProjects[NumOfProjectSlide].classList.toggle('active');
    NumOfProjectSlide = i;
    indicatorsProjects[NumOfProjectSlide].classList.toggle('active');
    sliderParentProjects.scrollTo({
        left: NumOfProjectSlide * projectSliderWidth,
        behavior:'smooth'
    })
}




//............hading events
///hadling blog scrolling

indicatorsBlog.forEach((ind,i) => {
    ind.addEventListener('click', function (e) {
        this.setAttribute('disabled', true);
        setTimeout(function () {
            indicatorsBlog[i].removeAttribute('disabled');
        }, 800);
        handlingScrollingBlog(i);
        
    })
})

///hadling event scrolling
indicatorsEvent.forEach((ind, i) => {
    ind.addEventListener('click', function (e) {
        this.setAttribute('disabled', true);
        setTimeout(function () {
            indicatorsEvent[i].removeAttribute('disabled');
        }, 800);
        handlingScrollingEvent(i);

    })
})
indicatorsProjects.forEach((ind, i) => {
    ind.addEventListener('click', function (e) {
        this.setAttribute('disabled', true);
        setTimeout(function () {
            indicatorsProjects[i].removeAttribute('disabled');
        }, 800);
        handlingScrollingProject(i);

    })
})

//hadling newsletter
subToNews.addEventListener('click', function () {
    layover.classList.add('active-layover');
});
exit.addEventListener('click', function () {
    layover.classList.remove('active-layover');
});