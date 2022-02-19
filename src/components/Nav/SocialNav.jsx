import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {icons , socialData} from '../icons';

const SocialNav = () => {

    return (  
        <ul className="flex text-sm">
            {socialData.map((scData)=>(
                <li key={scData.id} className="mx-1">
                    <a href={scData.link} className="py-1 px-2 rounded-md bg-indigo-800">
                        <FontAwesomeIcon icon={icons[scData.icon_id]} />
                    </a>
                </li>
            ))}
        </ul>
    );
}
 
export default SocialNav;