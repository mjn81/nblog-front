import { useEffect, useState } from "react";
import { useFetchPostPaginate } from "../../hooks";
import { Badge, ScrollNews } from "../core";
import SocialNav from "./SocialNav";
const TopNav = () => {
	const { data } = useFetchPostPaginate(1);
	const [news , setNews] = useState(null);
	useEffect(() => {
		if (!data) return;
		const { results } = data;
        setNews(results.slice(0, 5));
    }, [data]);

	return (
		<div className="bg-indigo-700 w-full justify-between flex flex-col lg:flex-row items-center text-white p-2">
			<section className="w-full flex lg:w-1/2 ">
				<Badge>Read More</Badge>
				{news && <ScrollNews news={news} />}
			</section>
			<section className="my-3 lg:my-0">
				<SocialNav />
			</section>
		</div>
	);
};

export default TopNav;
