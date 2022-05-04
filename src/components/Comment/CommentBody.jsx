import {
	FullButton,
	Label,
	MdInput,
	Row,
	SquareButton,
	TextArea,
} from "../core";
import { useFetchComments } from "../../hooks";

export const CommentItem = ({ id, title, text, setStatus }) => {
	const { data } = useFetchComments(id);
	return (
		<section className="bg-gray-100 p-6 rounded">
			{data && (
				<section className="flex flex-col sm:flex-row items-center sm:items-start">
					<div className="text-center">
						<img
							src={`https://ui-avatars.com/api/?name=${data.user.username}`}
							className="rounded-full overflow-hidden w-60 object-cover"
							alt={data.user.username}
						/>
						<p className="text-gray-500 mt-2">{data.user.username}</p>
					</div>
					<div className="mt-2 sm:ml-6 sm:mt-0">
						<h4 className="mb-2 text-2xl font-bold">{title} :</h4>
						<p className="font-light">{text}</p>
						<SquareButton
							onClick={() =>
								setStatus({ username: data.user.username, st: true })
							}
							bgColor=" bg-gray-300"
							adclass="text-gray-700 mt-6 text-sm"
						>
							reply
						</SquareButton>
					</div>
				</section>
			)}
			{data && data.replies && (
				<h4 className="my-4 italic text-xl text-gray-500 font-bold">
					replies :{" "}
				</h4>
			)}
			{data &&
				data.replies &&
				data.replies.map((rep, index) => (
					<section key={index} className="bg-gray-200 my-3 p-4 rounded">
						<section className="flex flex-col sm:flex-row items-center sm:items-start">
							<div className="text-center">
								<img
									src={`https://ui-avatars.com/api/?name=${rep.user.username}`}
									className="rounded-full overflow-hidden w-28 object-cover"
									alt={rep.user.username}
								/>
								<p className="text-slate-500 mt-2">{rep.user.username}</p>
							</div>
							<div className="mt-2 sm:ml-6 sm:mt-0">
								<h4 className="mb-2 text-xl font-bold text-slate-500">
									{rep.title} :{" "}
								</h4>
								<p className="font-light text-slate-600">{rep.caption}</p>
							</div>
						</section>
					</section>
				))}
		</section>
	);
};

export const CommentForm = () => {
	//todo: if not login disable commenting -> redux
	return (
		<form>
			<Row>
				<Label src="cmt-title" text="title" />
				<MdInput type="text" text="title..." id="cmt-title" />
			</Row>
			<Row>
				<Label src="cmt-text" text="comment" />
				<TextArea text="enter your comment..." id="cmt-text" />
			</Row>
			<div className="px-8 pt-4 pb-2">
				<FullButton adClass="shadow-md">Submit</FullButton>
			</div>
		</form>
	);
};
