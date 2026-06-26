/*=========================================
            Loader
=========================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});


/*=========================================
        Sticky Navbar
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("active");

    } else {

        navbar.classList.remove("active");

    }

});


/*=========================================
        Mobile Menu
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/*=========================================
        Scroll Progress
=========================================*/

const progressBar = document.querySelector(".progress-bar span");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});


/*=========================================
        Scroll To Top
=========================================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/*=========================================
        Hero Slider
=========================================*/

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;
let sliderInterval;

/* Show Slide */

function showSlide(index){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    dots.forEach(dot=>{

        dot.classList.remove("active");

    });

    slides[index].classList.add("active");

    dots[index].classList.add("active");

}

/* Next Slide */

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

/* Previous Slide */

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}

/* Auto Slider */

function startSlider(){

    sliderInterval = setInterval(nextSlide,5000);

}

/* Stop Slider */

function stopSlider(){

    clearInterval(sliderInterval);

}

/* Button Events */

if(nextBtn){

nextBtn.addEventListener("click",()=>{

stopSlider();

nextSlide();

startSlider();

});

}

if(prevBtn){

prevBtn.addEventListener("click",()=>{

stopSlider();

prevSlide();

startSlider();

});

}

/* Dot Navigation */

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

stopSlider();

currentSlide=index;

showSlide(currentSlide);

startSlider();

});

});

/* Start */

if(slides.length>0){

showSlide(currentSlide);

startSlider();

}

/*=========================================
        Keyboard Navigation
=========================================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

stopSlider();

nextSlide();

startSlider();

}

if(e.key==="ArrowLeft"){

stopSlider();

prevSlide();

startSlider();

}

});

/*=========================================
        Pause On Hover
=========================================*/

const heroSlider=document.querySelector(".hero-slider");

if(heroSlider){

heroSlider.addEventListener("mouseenter",()=>{

stopSlider();

});

heroSlider.addEventListener("mouseleave",()=>{

startSlider();

});

}

/*=========================================
        Touch Swipe (Mobile)
=========================================*/

let touchStartX=0;
let touchEndX=0;

if(heroSlider){

heroSlider.addEventListener("touchstart",(e)=>{

touchStartX=e.changedTouches[0].screenX;

});

heroSlider.addEventListener("touchend",(e)=>{

touchEndX=e.changedTouches[0].screenX;

if(touchEndX < touchStartX-50){

stopSlider();

nextSlide();

startSlider();

}

if(touchEndX > touchStartX+50){

stopSlider();

prevSlide();

startSlider();

}

});

}
/*=========================================
            Typed Text
=========================================*/

const typedElement = document.querySelector(".typed-text");

if (typedElement) {

    new Typed(".typed-text", {

        strings: [

            "Digital Future",

            "Website Development",

            "Graphic Design",

            "Digital Marketing",

            "Online Learning"

        ],

        typeSpeed: 80,

        backSpeed: 50,

        backDelay: 1800,

        startDelay: 300,

        loop: true,

        smartBackspace: true,

        showCursor: true,

        cursorChar: "|"

    });

}

/*=========================================
        Animated Counter
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let count = 0;

        const speed = target / 120;

        function updateCounter() {

            count += speed;

            if (count < target) {

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target.toLocaleString() + "+";

            }

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*=========================================
        AOS Initialize
=========================================*/

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 900,

        once: true,

        easing: "ease-in-out",

        offset: 100

    });

}

/*=========================================
        Scroll Reveal Animation
=========================================*/

const revealItems = document.querySelectorAll(

    ".tool-card, .service-card, .course-card, .tutorial-card, .stat-card, .why-card, .process-card, .portfolio-card, .team-card"

);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

revealItems.forEach(item => {

    revealObserver.observe(item);

});

/*=========================================
        Smooth Fade for Sections
=========================================*/

const sections = document.querySelectorAll("section");

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

});

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.transition = "all .8s ease";

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.12

});

sections.forEach(section => {

    sectionObserver.observe(section);

});
/*=========================================
        Testimonial Slider
=========================================*/

const testimonials = document.querySelectorAll(".testimonial-item");

let testimonialIndex = 0;

function showTestimonial(index){

    testimonials.forEach(item=>{

        item.classList.remove("active");

    });

    testimonials[index].classList.add("active");

}

function nextTestimonial(){

    testimonialIndex++;

    if(testimonialIndex >= testimonials.length){

        testimonialIndex = 0;

    }

    showTestimonial(testimonialIndex);

}

if(testimonials.length){

    showTestimonial(0);

    setInterval(nextTestimonial,5000);

}


/*=========================================
        FAQ Accordion
=========================================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

const answer=item.querySelector(".faq-answer");

question.addEventListener("click",()=>{

faqItems.forEach(f=>{

if(f!==item){

f.querySelector(".faq-answer").style.display="none";

}

});

if(answer.style.display==="block"){

answer.style.display="none";

}else{

answer.style.display="block";

}

});

});


/*=========================================
        Video Popup
=========================================*/

const playBtn=document.querySelector(".play-btn");

if(playBtn){

playBtn.addEventListener("click",(e)=>{

e.preventDefault();

window.open(

"https://www.youtube.com/watch?v=dQw4w9WgXcQ",

"_blank"

);

});

}


/*=========================================
        Dark Mode
=========================================*/

const darkToggle=document.querySelector(".dark-mode");

if(darkToggle){

darkToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

localStorage.setItem(

"theme",

document.body.classList.contains("dark")

? "dark"

: "light"

);

});

}

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

}


/*=========================================
        Portfolio Filter
=========================================*/

const filterButtons=document.querySelectorAll(".filter-btn");

const portfolioCards=document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

const filter=button.dataset.filter;

portfolioCards.forEach(card=>{

if(

filter==="all"

||

card.dataset.category===filter

){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});


/*=========================================
        Active Navigation
=========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href")==="#" + current

){

link.classList.add("active");

}

});

});
/*=========================================
        Custom Cursor
=========================================*/

const cursor = document.querySelector(".cursor");
const cursorBlur = document.querySelector(".cursor-blur");

if (cursor && cursorBlur) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        cursorBlur.style.left = (e.clientX - 150) + "px";
        cursorBlur.style.top = (e.clientY - 150) + "px";

    });

}


/*=========================================
        Hover Effect
=========================================*/

document.querySelectorAll("a,button").forEach(item=>{

item.addEventListener("mouseenter",()=>{

if(cursor){

cursor.classList.add("active");

}

});

item.addEventListener("mouseleave",()=>{

if(cursor){

cursor.classList.remove("active");

}

});

});


/*=========================================
        Live Chat Button
=========================================*/

const liveChat=document.querySelector(".live-chat");

if(liveChat){

liveChat.addEventListener("click",()=>{

alert("Live Chat Coming Soon!");

});

}


/*=========================================
        Page Transition
=========================================*/

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",(e)=>{

const href=link.getAttribute("href");

if(

href &&

!href.startsWith("#") &&

!href.startsWith("http")

){

document.body.classList.add("page-loading");

}

});

});


/*=========================================
        Lazy Loading Images
=========================================*/

const lazyImages=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

img.loading="lazy";

imageObserver.unobserve(img);

}

});

});

lazyImages.forEach(img=>{

imageObserver.observe(img);

});


/*=========================================
        Performance
=========================================*/

window.addEventListener("pageshow",()=>{

document.body.classList.remove("page-loading");

});


/*=========================================
        Resize Fix
=========================================*/

window.addEventListener("resize",()=>{

if(window.innerWidth>992){

navMenu.classList.remove("active");

}

});


/*=========================================
        Prevent Form Reload
=========================================*/

document.querySelectorAll("form").forEach(form=>{

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Form Submitted Successfully!");

});

});


/*=========================================
        Console Message
=========================================*/

console.log("%cRK Skill BD","color:#2563eb;font-size:24px;font-weight:bold;");

console.log("Premium Digital Agency Website Loaded Successfully.");
