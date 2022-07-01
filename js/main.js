const homepage = document.getElementById('home_link'),
      service = document.getElementById('services_link'),
      about = document.getElementById('about_link'),
      contact = document.getElementById('contact_link');

const close = [homepage, service, about, contact];

document.querySelector('.burger').addEventListener('click', el => {
    document.querySelector('.burger_menu').classList.remove('inactive');
    document.querySelector('.burger_menu').classList.add('active');
    document.querySelector('.search__li').classList.remove('active');
    document.querySelector('.search__li').classList.add('inactive');
    document.querySelector('.search__icon').classList.remove('inactive');
} );

document.querySelector('.x').addEventListener('click', el => {
    document.querySelector('.burger_menu').classList.remove('active');
    document.querySelector('.burger_menu').classList.add('inactive');
    document.querySelector('.search__li').classList.remove('active');
    document.querySelector('.search__li').classList.add('inactive');
    document.querySelector('.search__icon').classList.remove('inactive');
} );

document.getElementById('home_link').addEventListener('click', el => {
    document.querySelector('.burger_menu').classList.remove('active');
    document.querySelector('.burger_menu').classList.add('inactive');
    document.querySelector('.search__li').classList.remove('active');
    document.querySelector('.search__li').classList.add('inactive');
    document.querySelector('.search__icon').classList.remove('inactive');
} );

document.getElementById('services_link').addEventListener('click', el => {
    document.querySelector('.burger_menu').classList.remove('active');
    document.querySelector('.burger_menu').classList.add('inactive');
    document.querySelector('.search__li').classList.remove('active');
    document.querySelector('.search__li').classList.add('inactive');
    document.querySelector('.search__icon').classList.remove('inactive');
} );

document.getElementById('about_link').addEventListener('click', el => {
    document.querySelector('.burger_menu').classList.remove('active');
    document.querySelector('.burger_menu').classList.add('inactive');
    document.querySelector('.search__li').classList.remove('active');
    document.querySelector('.search__li').classList.add('inactive');
    document.querySelector('.search__icon').classList.remove('inactive');
} );

document.getElementById('contact_link').addEventListener('click', el => {
    document.querySelector('.burger_menu').classList.remove('active');
    document.querySelector('.burger_menu').classList.add('inactive');
    document.querySelector('.search__li').classList.remove('active');
    document.querySelector('.search__li').classList.add('inactive');
    document.querySelector('.search__icon').classList.remove('inactive');
} );




document.querySelector('.search__icon').addEventListener('click', el => {
    document.querySelector('.search__icon').classList.add('inactive');
    document.querySelector('.search__li').classList.remove('inactive');
    document.querySelector('.search__li').classList.add('active');
} );

// document.querySelector('.burger_menu').addEventListener('click', el => {
//     document.querySelector('.search__li').classList.remove('active');
//     document.querySelector('.search__li').classList.add('inactive');
//     document.querySelector('.search__icon').classList.remove('inactive');
// } );

document.querySelector('.search__icon_main').addEventListener('click', el => {
    document.querySelector('.search__icon_main').classList.add('inactive');
    document.querySelector('.search__li_main').classList.remove('inactive');
    document.querySelector('.search__li_main').classList.add('active');
} );

document.querySelector('.offer').addEventListener('click', el => {
    document.querySelector('.search__li_main').classList.remove('active');
    document.querySelector('.search__li_main').classList.add('inactive');
    document.querySelector('.search__icon_main').classList.remove('inactive');
} );