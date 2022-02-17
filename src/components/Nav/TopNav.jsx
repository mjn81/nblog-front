import { Badge, ScrollNews } from "../core";
import SocialNav from "./SocialNav";
const TopNav = () => {
    
    
    
    return ( 
        <div className="bg-indigo-700 w-full justify-between flex items-center text-white p-2">
            <section className="w-1/3 flex">
                <Badge>
                    Read More
                </Badge>  
                <ScrollNews />
            </section>
            <section>
                <SocialNav />
            </section>
        </div>
     );
}
 
export default TopNav;