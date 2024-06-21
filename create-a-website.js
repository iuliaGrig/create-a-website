window.addEventListener('resize', function() {
    this.document.querySelector('main').style.marginTop = navHeight + 'px';
});

document.addEventListener('DOMContentLoaded', function() {
    const navHeight = document.querySelector('nav').offsetHeight;
    const mainContent = document.getElementById('main-content');
    mainContent.style.marginTop = navHeight + 'px';
});

document.addEventListener('DOMContentLoaded', function() {
    const navHeight = document.querySelector('nav').offsetHeight;
    const mainContent = document.getElementById('main-content-creations');
    mainContent.style.marginTop = navHeight + 'px';
});

document.addEventListener('DOMContentLoaded', function() {
    const navHeight = document.querySelector('nav').offsetHeight;
    const mainContent = document.getElementById('main-content-contact');
    mainContent.style.marginTop = navHeight + 'px';
})