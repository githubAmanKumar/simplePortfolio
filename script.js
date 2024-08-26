// Variable declarations

const main = document.getElementById('main');
const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');
const closeLogo = document.querySelector('.closeLogo');
const menuLogo = document.querySelector('.menuLogo');
const menuHeadings = document.querySelectorAll('.menuHeadings');
const mode = document.getElementById('mode');
const darkMode = document.getElementById('darkMode');
const lightMode = document.getElementById('lightMode');
let flag = true;
const project = document.querySelectorAll(".project");

// Menu button toggle animation

menuLogo.addEventListener("click", () => {
    menu.style.height = "50px";
    menuLogo.style.display = "none";
    closeLogo.style.display = "block";
    menuHeadings.forEach((e) => {
        e.style.display = "block";
    })

});
closeLogo.addEventListener("click", () => {
    menu.style.height = "0px";
    menuLogo.style.display = "block";
    closeLogo.style.display = "none";
    menuHeadings.forEach((e) => {
        e.style.display = "none";
    })
});

// Dark and light mode toggle effect

mode.addEventListener("click", () => {
    if (flag == true) {
        darkMode.style.display = "none";
        lightMode.style.display = "block";
        main.style.backgroundColor = "#F3F4F6";
        document.documentElement.style.setProperty('--secondary-color', '#F3F4F6');
        document.documentElement.style.setProperty('--text-color', '#272e39');
        flag = false;

    } else {
        darkMode.style.display = "block";
        lightMode.style.display = "none";
        main.style.backgroundColor = "#272e39";
        document.documentElement.style.setProperty('--secondary-color', '#272e39');
        document.documentElement.style.setProperty('--text-color', '#F3F4F6');
        flag = true;
    }
});

// Project headings animations

project.forEach(e => {
    e.children[0].addEventListener("mousemove", (elem) => {
        console.log(e.children[0]);

        e.children[1].style.display = "block";
        const rect = e.getBoundingClientRect();
        const x = elem.clientX - rect.left - e.children[1].width / 2;
        const y = elem.clientY - rect.top - e.children[1].height / 2;
        e.children[1].style.transform = `translate(${x}px, ${y}px)`;
    });
    e.children[0].addEventListener("mouseleave", (elem) => {
        e.children[1].style.display = "none";
    })
})