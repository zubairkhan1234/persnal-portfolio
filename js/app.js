


$(document).ready(function () {

    let hamburger = document.querySelector('.hamburger')
    let close = document.querySelector('.close')
    let MobileNav = document.querySelector('.mobile-nav')
    let navItems1 = document.querySelector('.nav-items1')
    let navItems2 = document.querySelector('.nav-items2')
    let navItems3 = document.querySelector('.nav-items3')
    let navItems4 = document.querySelector('.nav-items4')
    let navItems5 = document.querySelector('.nav-items5')
    
    hamburger.addEventListener('click', function () {

        MobileNav.classList.add('open')


    })
    close.addEventListener('click', function () {
        MobileNav.classList.remove('open')
    })


    navItems1.addEventListener('click', function () {
        MobileNav.classList.remove('open')
    })
    navItems2.addEventListener('click', function () {
        MobileNav.classList.remove('open')
    })
    navItems3.addEventListener('click', function () {
        MobileNav.classList.remove('open')
    })
    navItems4.addEventListener('click', function () {
        MobileNav.classList.remove('open')
    })
    navItems5.addEventListener('click', function () {
        MobileNav.classList.remove('open')
    })
})