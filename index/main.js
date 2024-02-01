/* let sections= document.querySelector('section');
let navLists = document.querySelectorAll('nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLists.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            });}


    });
};

let sections = document.querySelector('section');
let navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes (`${sections}`)){
        console.log(sections);
    }
});*/


let sections = document.querySelectorAll('section');
let navLists = document.querySelectorAll('nav a');

window.onscroll = () => {
    Array.from(sections).forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLists.forEach(links => {
                links.classList.remove('active');
            });

            document.querySelector(`nav a[href*='${id}']`).classList.add('active');
        }
    });
};
