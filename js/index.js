
function tgl() {
    document.querySelector('.page-content .testimonials .container .wrapper .page-switcher .box').classList.toggle('active');

}

document.querySelector('.page-content .testimonials .container .wrapper .page-switcher .box').addEventListener('click', tgl);