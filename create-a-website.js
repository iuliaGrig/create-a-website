document.addEventListener('DOMContentLoaded', function() {
    const navHeight = document.querySelector('nav').offsetHeight;
    const mainContent = document.getElementById('main-content');
    const videoHeader = document.querySelector('main header');

    mainContent.style.marginTop = navHeight + 'px';
});

window.addEventListener('resize', function() {
    const navHeight = document.querySelector('nav').offsetHeight;
    this.document.querySelector('main').style.marginTop = navHeight + 'px';
})