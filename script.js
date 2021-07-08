function menu() {
    let hamburger = document.querySelector('.hamburg');
    let closeBtn = hamburger.getAttribute('src');
    let mobileMenu = document.querySelector('.menu');

    if (closeBtn == "/images/icon-hamburger.svg") {
        hamburger.setAttribute('src', '/images/icon-close.svg');
        mobileMenu.style.display = 'block';
    } else {
        hamburger.setAttribute('src', '/images/icon-hamburger.svg');
        mobileMenu.style.display = 'none';
    }
}