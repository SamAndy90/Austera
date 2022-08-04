const homepage = document.getElementById('home_link');
const service = document.getElementById('services_link');
const about = document.getElementById('about_link');
const contact = document.getElementById('contact_link');
const x_icon = document.querySelector('.x');

const burger_menu = document.querySelector('.burger_menu');
const openBurger = document.querySelector('.burger');
const search_icon = document.querySelector('.search__icon');
const search_li = document.querySelector('.search__li');



function closeSearchInput() {
    search_li.classList.remove('active');
    search_li.classList.add('inactive');
    search_icon.classList.remove('inactive');
};

function closeBurgerMenu() {
    burger_menu.classList.remove('active');
    burger_menu.classList.add('inactive');
};



openBurger.addEventListener('click', el => {
    burger_menu.classList.remove('inactive');
    burger_menu.classList.add('active');
    closeSearchInput();
} );

x_icon.addEventListener('click', el => {
    closeBurgerMenu();
    closeSearchInput();
} );

homepage.addEventListener('click', el => {
    closeBurgerMenu();
    closeSearchInput();
} );

service.addEventListener('click', el => {
    closeBurgerMenu();
    closeSearchInput();
} );

about.addEventListener('click', el => {
    closeBurgerMenu();
    closeSearchInput();
} );

contact.addEventListener('click', el => {
    closeBurgerMenu();
    closeSearchInput();
} );



search_icon.addEventListener('click', el => {
    search_icon.classList.add('inactive');
    search_li.classList.remove('inactive');
    search_li.classList.add('active');
} );

// document.querySelector('.burger_menu').addEventListener('click', el => {
//     document.querySelector('.search__li').classList.remove('active');
//     document.querySelector('.search__li').classList.add('inactive');
//     document.querySelector('.search__icon').classList.remove('inactive');
// } );

const search_icon_main = document.querySelector('.search__icon_main');
const search_li_main = document.querySelector('.search__li_main');
const offer = document.querySelector('.offer');


search_icon_main.addEventListener('click', el => {
    search_icon_main.classList.add('inactive');
    search_li_main.classList.remove('inactive');
    search_li_main.classList.add('active');
} );

offer.addEventListener('click', el => {
    search_li_main.classList.remove('active');
    search_li_main.classList.add('inactive');
    search_icon_main.classList.remove('inactive');
} );