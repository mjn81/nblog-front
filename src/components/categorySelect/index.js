const CategorySelect = ({ data, category, setCategory }) => {
	return (
		<div className="h-72 border overflow-scroll border-gray-200">
			{data.map((cat, index) => {
				const isSelected = category.find((item) => item.id === cat.id);
				return (
					<div
						className={
							"cursor-pointer border-b hover:bg-gray-50 p-2 " +
							(!!isSelected ? "bg-gray-100 border-gray-200" : "border-transparent")
						}
						onClick={() => {
							if (!!isSelected) {
								setCategory(
									category.filter((item) => item.id !== cat.id)
								);
								return;
							}
							const set = new Set([...category, cat]);
							setCategory([...set]);
                        }}
                        key={index}
					>
						{cat.title}
					</div>
				);
			})}
		</div>
	);
};

export default CategorySelect;
