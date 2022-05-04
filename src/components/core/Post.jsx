import {Badge} from "./Badge";
import {Link} from "react-router-dom";
import { COLORS , COLORS_LENGTH } from "../../constants";

export const Post = ({id, title, badges, img, description, date}) => {
    const limit = 250;
    const trimmedStr = description.substring(0, limit);
    const shortStr = description.substring(0, Math.min(limit, trimmedStr.lastIndexOf(' ')));
    const localeDate = new Date(date);
    return (
			<article className="bg-white my-5 relative p-6 rounded-lg lg:grid lg:grid-cols-7 lg:gap-4 transition-shadow duration-200 ease-in p-title hover:shadow-lg">
				<div className="absolute w-max text-center top-0 z-10 right-6 bg-gray-50 p-3 text-gray-400 text-xs rounded-b-lg">
					<p>{localeDate.toLocaleString("default", { day: "2-digit" })}</p>
					<p>{localeDate.toLocaleString("default", { month: "long" })}</p>
					{/* <p>{localeDate.toLocaleString("default", { year: '2-digit' })}</p> */}
				</div>
				<section className="lg:col-span-2 mb-5 lg:mb-0 overflow-hidden rounded-lg">
					<Link to={`/post-page/${id}`}>
						<img
							src={img}
							alt={title}
							className="w-full h-full object-cover origin-center transition-transform duration-500 ease-out"
						/>
					</Link>
				</section>
				<section className="lg:col-span-5">
					<section className="flex flex-wrap  text-sm">
						{badges.map(({ title }, index) => (
							<Badge
								key={index}
								bgColor={COLORS[Math.floor(Math.random() * COLORS_LENGTH)]}
								adClass={
									"mb-2 md:mb-0 py-0.5" + (index === 0 ? " mr-1" : " mx-1")
								}
							>
								{title}
							</Badge>
						))}
					</section>
					<Link to={`/post-page/${id}`} className="inline-block">
						<h1 className="my-2 text-gray-800 text-2xl hover:text-indigo-700">
							{title}
						</h1>
					</Link>
					<p className="text-sm sm:text-base lg:font-light text-gray-700">
						{shortStr} {description.length > limit ? "..." : ""}
					</p>
				</section>
			</article>
		);
}