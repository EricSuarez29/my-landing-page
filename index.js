const d = document,
    w = window,
    $navbar = d.querySelector('nav');

const setPosition = () => {
    let {scrollTop, clientWidth} = d.documentElement;
    if(scrollTop >= 650){
        $navbar.classList.add('bg-dark', 'sticky-top');
    }else{
        $navbar.classList.remove('bg-dark', 'sticky-top');
    }

}

w.addEventListener('scroll', setPosition)
d.addEventListener('DOMContentLoaded', setPosition)

