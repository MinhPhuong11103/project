let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

const btnScrollToTop = document.getElementById('scrollToTopBtn');

const docEL = document.documentElement

document.addEventListener('scroll', () => {
    const scrollToTal = docEL.scrollHeight - docEL.clientHeight;

    if((docEL.scrollTop / scrollToTal) >= 0.4){
        btnScrollToTop.hidden = false
    }else{
        btnScrollToTop.hidden = true
    }
})

btnScrollToTop.addEventListener('click', () => {
    docEL.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
