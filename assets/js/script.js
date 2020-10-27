window.addEventListener('scroll', function (e) {
    console.log(window.scrollY);
    if (window.scrollY >= 50 && window.scrollY < 520) {
        document.querySelector('#biodata').classList.remove('invisible');
        document.querySelector('#biodata').classList.remove('animate__slideOutLeft');
        document.querySelector('#biodata').classList.add('animate__slideInLeft');
        document.querySelector('#singkat').classList.remove('invisible');
        document.querySelector('#singkat').classList.remove('animate__slideOutRight');
        document.querySelector('#singkat').classList.add('animate__slideInRight');
    }
    if (window.scrollY >= 520 && window.scrollY < 850) {
        document.querySelector('#biodata').classList.remove('animate__slideInLeft');
        document.querySelector('#biodata').classList.add('animate__slideOutLeft');
        document.querySelector('#singkat').classList.remove('animate__slideInRight');
        document.querySelector('#singkat').classList.add('animate__slideOutRight');
    }
    if (window.scrollY >= 200 && window.scrollY < 800) {
        document.querySelector('#skills').classList.remove('invisible');
        document.querySelector('#skills').classList.remove('animate__fadeOut');
        document.querySelector('#skills').classList.add('animate__fadeIn');
    }
    if (window.scrollY >= 800 && window.scrollY < 900) {
        document.querySelector('#skills').classList.remove('animate__fadeIn');
        document.querySelector('#skills').classList.add('animate__fadeOut');
    }
    if (window.scrollY >= 450) {
        document.querySelector('#portfolio').classList.remove('invisible');
        document.querySelector('#portfolio').classList.remove('animate__fadeOut');
        document.querySelector('#portfolio').classList.add('animate__fadeIn');
    }
});
const maincard = document.querySelectorAll('.img-thumbnail');
maincard.forEach(m => {
    m.addEventListener('mouseover', function () {
        this.classList.add('animate__pulse');
    });
});
maincard.forEach(m => {
    m.addEventListener('mouseout', function () {

        this.classList.remove('animate__pulse');
    });
})