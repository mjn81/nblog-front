import MainNav from "./Nav/MainNav";
import TopNav from "./Nav/TopNav";
import { useFetchCategory } from "../hooks";

const Header = () => {
    const { data, loading } = useFetchCategory();
	return (
		<header className="w-full">
			<TopNav />
			{loading ? (
				<div></div>
			) : (
				<MainNav categories={data} />
			)}
		</header>
	);
};

export default Header;
