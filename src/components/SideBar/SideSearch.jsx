import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FullButton, MdInput, SideCard } from "../core";

const SideSearch = () => {
	const [search, setSearch] = useState("");
    const navigator = useNavigate();
    const onSearchClick = () => {
		navigator(`/search/${search}`);
		setSearch('');
    }


	return (
		<SideCard title="Search">
			<form>
				<MdInput
					type="search"
					text="search for..."
					id="search-side"
					value={search}
					setValue={setSearch}
				/>
				<FullButton adClass="mt-5 mb-3" onClick={onSearchClick} >Search</FullButton>
			</form>
		</SideCard>
	);
};

export default SideSearch;
