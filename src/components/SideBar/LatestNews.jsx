import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SideCard } from "../core";
import { useFetchPostPaginate } from "../../hooks";

const LatestNews = () => {
	const { data } = useFetchPostPaginate(1);
	const [p, setP] = useState(null);
	useEffect(() => {
		if (!data) return;
		const { results } = data;
		setP(results.slice(0, 7));
	}, [data]);

	const maxLength = 15;

	return (
		<SideCard title="Latest news">
			<ul className="pb-2">
				{p && p.map((post, index) => (
					<li
						key={post.id}
						className={
							"flex py-2.5 border-dashed border-gray-200 mx-2 li-side-hover" +
							(index < p.length - 1 ? " border-b-2" : "")
						}
					>
						<Link to={`/post-page/${post.id}`}>
							<img
								src={post.image}
								alt={post.title}
								className="w-12 h-12 rounded-full border-2"
							/>
						</Link>
						<section className="ml-3">
							<Link
								to={`/post-page/${post.id}`}
								className="whitespace-nowrap text-gray-700 "
							>
								{post.title.substring(0, maxLength) +
									(post.title.length > maxLength ? "..." : "")}
							</Link>
							<p className="text-gray-400 text-sm font-light">
								{post.created_at.split("T")[0]}
							</p>
						</section>
					</li>
				))}
			</ul>
		</SideCard>
	);
};

export default LatestNews;
