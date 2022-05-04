export const MdInput = ({ text, type, name = "", value, setValue, id }) => {
	return (
		<div>
			<input
				type={type}
				placeholder={text}
				name={name}
				value={value}
				onChange={(e) => setValue(e.currentTarget.value)}
				id={id}
				className="w-full rounded-lg py-2 px-4 outline-2 border-2 text-gray-700 border-gray-100 focus:outline outline-indigo-100"
			/>
		</div>
	);
};

export const PortalInput = ({ text, name, value, setValue , setSubmit }) => {
	return (
		<input
			type="search"
			placeholder={text}
			name={name}
			value={value}
			onChange={(e) => setValue(e.currentTarget.value)}
			onKeyDown={(e) => setSubmit(e)}
			className="p-6 w-[356px] lg:w-[1020px] rounded-3xl  focus:outline outline-indigo-500 outline-4 text-white bg-opacity-30 bg-black text-xl"
		/>
	);
};

export const TextArea = ({ text, refrence, id, name }) => {
	return (
		<textarea
			name={name}
			id={id}
			ref={refrence}
			rows="10"
			placeholder={text}
			className="w-full block border-2 border-gray-300 border-dashed outline-offset-2
                  outline-2 focus:outline text-gray-700 rounded-xl p-6 outline-indigo-200 resize-none"
		></textarea>
	);
};
