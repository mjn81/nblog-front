import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram ,faTelegram,faTwitter,faSkype,faDribbble } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const SocialNav = () => {
    const links = [
        'telegram.com',
        'insta.com',
        'drbl.com',
        'twtr.com',
        'skype.com',        
    ]
    const icons = [
        faInstagram,
        faTwitter,
        faTelegram,
        faDribbble,
        faSkype
    ]
    return (  
        <ul className="flex text-sm">
            {icons.map((ic, index) => (
                <li key={index} className="mx-1">
                    <Link to={links[index]} className="py-1 px-2 rounded-md bg-indigo-800">
                        <FontAwesomeIcon icon={ic} />
                    </Link>
                </li>
            ))}
        </ul>
    );
}
 
export default SocialNav;