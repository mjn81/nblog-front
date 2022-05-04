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
	const image = useRef(null);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [status, setStatus] = useState("");
	// published, archived, draft
	const stats = [
		{
			text: "publish",
			value: "published",
		},
		{
			text: "archive",
			value: "archived",
		},
		{
			text: "draft",
			value: "draft",
		},
	];
	const [category, setCategory] = useState([]);
	const { data } = useFetchCategory();

	const onAddClick = () => {
		console.log(image.current.files[0]);
		const formData = new FormData();
		formData.append(image.current.files[0].name , image.current.files[0]); 
        // TODO : a set of problems for adding post
        addPost({
			title,
			description: content,
			status: status,
			image: formData,
			categories: category,
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
						<input type="file" ref={image} id="img" />
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
