import { useEffect } from "react";
import { OutlineButton } from "../core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Slider = ({ data }) => {
	const images = data.map(item => {
		return { img: item.image, title: item.title };
	});
	const carouselFunction = () => {
		const track = document.querySelector(".main-slider");
		const slides = track.querySelectorAll("img");
		const boundary = slides[0].getBoundingClientRect().width;
		const setSlidePos = (slide, index) => {
			slide.style.left = `${index * boundary}px`;
		};
		slides.forEach(setSlidePos);
	};

	const moveToSlide = (track, current, target) => {
		if (target == null) {
			return;
		}
		track.style.transform = "translateX(-" + target.style.left + ")";
		current.classList.remove("active");
		target.classList.add("active");
	};
	const getElements = () => {
		const track = document.querySelector(".main-slider");
		const current = track.querySelector(".active");
		return [track, current];
	};
	const moveToNext = () => {
		const [track, current] = getElements();
		const next = current.nextElementSibling;
		moveToSlide(track, current, next);
	};
	const moveToPrev = () => {
		const [track, current] = getElements();
		const prev = current.previousElementSibling;
		moveToSlide(track, current, prev);
	};

	const autoMovement = () => {
		const [track, current] = getElements();
		const next = current.nextElementSibling;
		moveToSlide(track, current, next);
		if (!next) {
			return;
		}
		setTimeout(autoMovement, 10000);
	};

	useEffect(() => {
		carouselFunction();
		const clr = setTimeout(autoMovement, 10000);
		return () => {
			clearTimeout(clr);
		};
	});

	return (
		<section className=" my-8 overflow-hidden rounded-xl relative text-white h-500">
			<div className="main-slider relative transition-transform duration-500 ease-out h-full">
				{images.map(({ img, title }, index) => (
					<img
						key={index}
						className={
							"w-full h-full object-cover absolute" +
							(index === 0 ? " active" : "")
						}
						src={img}
						alt={title}
					/>
				))}
			</div>
			<OutlineButton
				onClick={moveToPrev}
				adclass="absolute z-10 top-1/2 left-5 -translate-y-1/2 py-3 lg:px-2"
			>
				<FontAwesomeIcon icon={faChevronLeft} className="text-4xl" />
			</OutlineButton>
			<OutlineButton
				onClick={moveToNext}
				adclass="absolute z-10 top-1/2 right-5 -translate-y-1/2 py-3 lg:px-2"
			>
				<FontAwesomeIcon icon={faChevronRight} className="text-4xl" />
			</OutlineButton>
		</section>
	);
};

export default Slider;
