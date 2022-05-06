import { useState, useRef } from "react";
import JoditEditor from "jodit-react";

import {
	FullButton,
	Label,
	MdInput,
	Row,
	SimpleCard,
} from "../../components/core";
import Select from "../../components/core/Select";
import CategorySelect from "../../components/categorySelect";
import { addPost } from "../../api/post";
import { useFetchCategory } from "../../hooks";

const AddPost = () => {
	const editor = useRef(null);
	const [image, setImage] = useState(null);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [status, setStatus] = useState(2);
	// published, archived, draft
	const stats = [
		{
			text: "publish",
			value: 2,
		},
		{
			text: "archive",
			value: 1,
		},
		{
			text: "draft",
			value: 0,
		},
	];
	const [category, setCategory] = useState([]);
	const { data } = useFetchCategory();

	const onImageClick = (e) => {
		setImage(e.currentTarget.files);
		console.log(image);
	}
	const onAddClick = () => {
		const form = new FormData(image);
		addPost({
			title,
			description: content,
			status: status,
			categories: category.map(item => item.id),
			image:form
		});
	};
	return (
		<div className="grid grid-cols-4 gap-6 mx-16 mt-6">
			<div className="col-span-3">
				<SimpleCard>
					<h2 className="text-3xl">Add Post</h2>
					<form className="my-6">
						<Row>
							<Label text="title" src="title" />
							<MdInput
								type="text"
								text="add title..."
								name="title"
								id="title"
								value={title}
								setValue={setTitle}
							/>
						</Row>
						<div className="max-h-[600px] overflow-y-scroll">
							<Row>
								<Label text="content" />
								<JoditEditor
									ref={editor}
									value={content}
									tabIndex={6} // tabIndex of textarea
									onBlur={(newContent) => {
										setContent(newContent);
									}}
								/>
							</Row>
						</div>
					</form>
				</SimpleCard>
			</div>
			<div className="col-span-1">
				<SimpleCard>
					<Row>
						<Label text="status" src="stSelect" />
						<Select setValue={setStatus} optList={stats} id="stSelect" />
					</Row>
					<Row>
						<Label text="categories" />
						{data && (
							<CategorySelect
								data={data}
								category={category}
								setCategory={setCategory}
							/>
						)}
						<div>
							{category.map((cat, index) => (
								<p className="inline-block mr-2 text-indigo-500" key={index}>
									{cat.title}
								</p>
							))}
						</div>
					</Row>
					<Row>
						<Label text="image" src="img" />
						<input type="file" onChange={onImageClick} id="img" />
					</Row>
					<Row>
						<FullButton onClick={onAddClick}>Add</FullButton>
					</Row>
				</SimpleCard>
			</div>
		</div>
	);
};

export default AddPost;
