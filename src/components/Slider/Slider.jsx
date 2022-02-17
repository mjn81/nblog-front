import {useEffect} from "react";
import {OutlineButton} from "../core/Buttton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
    const images = [{
        title: 'new newss', img: 'https://picsum.photos/1000/300'
    }, {
        title: 'new newss', img: 'https://picsum.photos/1000/300'
    }, {
        title: 'new newss', img: 'https://picsum.photos/1000/300'
    }, {
        title: 'new newss', img: 'https://picsum.photos/200/300'
    }, {
        title: 'new newss', img: 'https://picsum.photos/200/500'
    },

    ]
    const carouselFunction = () => {
        const track = document.querySelector(".main-slider");
        const slides = track.querySelectorAll("img");
        const boundary = slides[0].getBoundingClientRect().width;
        const setSlidePos = (slide, index) => {
            slide.style.left = `${index * boundary}px`;
        }
        slides.forEach(setSlidePos);
    }

    const moveToSlide = (track, current, target) => {
        if (target == null) {
            return;
        }
        track.style.transform = 'translateX(-' + target.style.left + ')';
        current.classList.remove('active');
        target.classList.add('active');
    }
    const getElements = () => {
        const track = document.querySelector('.main-slider');
        const current = track.querySelector('.active');
        return [track, current];
    }
    const moveToNext = () => {
        const [track , current] = getElements();
        const next = current.nextElementSibling;
        moveToSlide(track , current , next);
    }
    const moveToPrev = () => {
        const [track , current] = getElements();
        const prev = current.previousElementSibling;
        moveToSlide(track , current , prev);
    }

    const autoMovement = () => {
        const [track , current] = getElements();
        const next = current.nextElementSibling;
        moveToSlide(track , current , next);
        if (!next){
            return;
        }
        setTimeout(autoMovement, 10000);
    }


    useEffect(() => {
        carouselFunction();
        setTimeout(autoMovement , 10000);
    });


    return (<section className=" my-6 overflow-hidden rounded-xl h-96 relative">
            <div className="main-slider relative transition-transform duration-500 ease-out h-full">
                {images.map(({img, title}, index) => (
                    <img key={index} className={"w-full h-full object-cover absolute" +(index===0 ? ' active' : '')} src={img} alt={title}/>))}
            </div>
            <OutlineButton onClick={moveToPrev} adclass='absolute z-10 top-1/2 left-5 -translate-y-1/2 py-3 px-2'>
                <FontAwesomeIcon icon={faChevronLeft} className="text-4xl" />
            </OutlineButton>
            <OutlineButton onClick={moveToNext} adclass='absolute z-10 top-1/2 right-5 -translate-y-1/2 py-3 px-2'>
                <FontAwesomeIcon icon={faChevronRight} className="text-4xl" />
            </OutlineButton>

        </section>);
}

export default Slider;