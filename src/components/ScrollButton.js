import {useState} from 'react';

function ScrollButton() {

const [visible, setVisible] = useState(false);

const toogleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if(scrolled > 300) {

        setVisible(true)
    } else if(scrolled <= 300) {
        setVisible(false)
    }
}

const scrollToTop = () => {

    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}

window.addEventListener('scroll', toogleVisible);

    return(


    <i onClick={scrollToTop} className="fas fa-chevron-up scrollTopBtn" style={{display: visible ? 'inline' : 'none'}}></i>




    )
}

export default ScrollButton;