import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContentLayout from "../layouts/ContentLayout";
import { Badge, SimpleCard } from "../components/core";
import {
	faCalendar,
	faComments,
	faUser,
} from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
import CommentSection from "../components/Comment/Comment";
import { useFetchPostContent } from "../hooks";
import {COLORS , COLORS_LENGTH} from '../constants';

const PostPage = () => {
	const { id } = useParams();
	const { data } = useFetchPostContent(id);
	useEffect(() => {
		if (data) {
			const content = document.querySelector("#content");
			content.innerHTML = data.description;
		}
	}, [data]);

	return (
		<div className="my-8">
			{data && (
				<ContentLayout>
					<SimpleCard>
						<article className="main-article sm:p-4">
							<header className="flex flex-wrap items-center justify-between">
								<h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-medium mb-2">
									{data.title}
								</h1>
								<section className="flex flex-wrap h-fit w-fit">
									{data.categories.map((cat, index) => (
										<Link key={index} to={`/cat/${cat.title}`}>
											<Badge
												adClass="mr-1 mb-1.5 lg:mb-0"
												bgColor={
													COLORS[Math.floor(Math.random() * COLORS_LENGTH)]
												}
											>
												{cat.title}
											</Badge>
										</Link>
									))}
								</section>
							</header>
							<section className="rounded-lg overflow-hidden mb-5 mt-2">
								<img
									src={data.image}
									alt={data.title}
									className="object-cover max-w-lg w-full m-auto"
								/>
							</section>
							<section className="flex flex-col lg:flex-row mb-3 text-gray-700">
								<span>
									<FontAwesomeIcon icon={faUser} className="mr-1.5" />
									written by :
									<p className="text-indigo-700 inline-block">
										{data.author.username}
									</p>
								</span>
								<span className="lg:ml-5">
									<FontAwesomeIcon icon={faCalendar} className="mr-1.5" />
									published at : {data.created_at.split("T")[0]}
								</span>
								<span className="lg:ml-5">
									<FontAwesomeIcon icon={faComments} className="mr-1.5" />
									comments : {data.comments.length}
								</span>
							</section>
							<section id="content" className="content"></section>
						</article>
					</SimpleCard>

					<CommentSection postId={id} comments={data.comments} />
				</ContentLayout>
			)}
		</div>
	);
};

export default PostPage;
