/* --- HOME - LOGO MOVE ON SCROLL ---*/

const header = document.querySelector('header');
const logoSmall = document.querySelector('.navbar-brand-hide');
const navbar = document.querySelector('.navbar')

window.onscroll = function(){
    let top = window.scrollY;
    if (top >= 750){
        logoSmall.classList.remove('navbar-brand-hide');
        logoSmall.classList.add('navbar-brand-show');
        navbar.classList.add('navbar-colored');
    }else{
        logoSmall.classList.add('navbar-brand-hide')
        logoSmall.classList.remove('navbar-brand-show');
        navbar.classList.remove('navbar-colored');
    }
}