import MainNav from "./Nav/MainNav";
import TopNav from "./Nav/TopNav";


const Header = () => {
    return (
        <header className="w-full">
            <TopNav />
            <MainNav />
        </header>
    );
}
 
export default Header;