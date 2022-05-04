import { InfoSeparator, OutlineButton, SimpleCard } from "../core";
import { CommentItem, CommentForm } from "./CommentBody";
import { useState } from "react";

const CommentSection = ({ comments , postId }) => {
	const [isRes, setIsRes] = useState({ username: "" , userid : null , st: false });
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
						onClick={() => setIsRes({ username: "" , userid: null , st: false })}
						adclass=" text-indigo-400"
					>
						cancel
					</OutlineButton>
				)}
			</InfoSeparator>
			<CommentForm postId={postId} isRes={isRes} setRes={setIsRes} />
		</SimpleCard>
	);
};

export default CommentSection;
