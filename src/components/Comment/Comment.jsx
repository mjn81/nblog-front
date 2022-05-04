import { InfoSeparator, OutlineButton, SimpleCard } from "../core";
import { CommentItem, CommentForm } from "./CommentBody";
import { useFetchComments } from "../../hooks";
import { useState } from "react";

const CommentSection = ({ comments }) => {
	// TODO : response answer implement
	const [isRes, setIsRes] = useState({ username: "", st: false });
	return (
		<SimpleCard>
			{!!comments.length && (
				<InfoSeparator title={`${comments.length} comments`} />
			)}
			<section className="grid gap-3">
				{comments.map((comment) => (
					<CommentItem
						id={comment.id}
						key={`comment_${comment.id}`}
						title={comment.title}
						text={comment.caption}
						setStatus={setIsRes}
					/>
				))}
			</section>

			<InfoSeparator
				title={isRes.st ? `reply to ${isRes.username}` : "write your opinion"}
			>
				{isRes.st && (
					<OutlineButton
						onClick={() => setIsRes({ username: "", st: false })}
						adclass=" text-indigo-400"
					>
						cancel
					</OutlineButton>
				)}
			</InfoSeparator>
			<CommentForm />
		</SimpleCard>
	);
};

export default CommentSection;
