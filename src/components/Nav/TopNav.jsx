import { Badge, ScrollNews } from "../core";
import SocialNav from "./SocialNav";
const TopNav = () => {
    
    
    
    return ( 
        <div className="bg-indigo-700 w-full justify-between flex flex-col lg:flex-row items-center text-white p-2">
            <section className="w-full flex lg:w-1/2 ">
                <Badge>
                    Read More
                </Badge>  
                <ScrollNews />
            </section>
            <section className="my-3 lg:my-0">
                <SocialNav />
            </section>
        </div>
     );
}
 
export default TopNav;