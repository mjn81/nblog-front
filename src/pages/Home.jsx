import ContentLayout from "../layouts/ContentLayout";
import Slider from "../components/Slider/Slider";
import { SectionCard } from "../components/core";
import { Post } from "../components/core/Post";
import Pagination from "../components/core/Pagination";
import React, { useState } from "react";
import { useFetchPost } from "../hooks";
const Home = () => {
	const plimit = 10;
	const [limit, setLimit] = useState({ start: 0, end: plimit });
	const active = limit.start / plimit;
	const { data } = useFetchPost(active + 1);
	const pnum = data && Math.ceil(data.count / plimit);
	return (
		<>
			{data && <Slider data={data.results} />}
			<ContentLayout>
				<SectionCard title="latest news">
					{data &&
						data.results.map(
							({ id, title, image, description, created_at, categories }) => (
								<Post
									key={id}
									id={id}
									title={title}
									img={image}
									description={description}
									date={created_at}
									badges={categories}
								/>
							)
						)}
				</SectionCard>
				<div className="w-full flex items-center justify-center py-6">
					{data && (
						<Pagination
							pageNumber={pnum}
							active={active}
							plimit={plimit}
							setLimit={setLimit}
						/>
					)}
				</div>
			</ContentLayout>
		</>
	);
};

export default Home;
