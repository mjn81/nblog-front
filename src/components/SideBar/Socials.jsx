import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {icons , socialData} from "../icons";
import {Badge} from "../core";

const SocialSideBar = () => {

    return (
        <div>
            <ul className="grid gap-3">
                {socialData.map((soc)=> (
                    <li key={soc.id} className={'rounded-md py-2 px-4 ' +soc.color}>
                        <a href={soc.link} className="flex items-center font-light">
                            <FontAwesomeIcon icon={icons[soc.icon_id]} className="text-4xl text-white" />
                            <p className="text-white flex-grow ml-3 text-md">{soc.title}</p>
                            <Badge isWhite={false} bgColor=" bg-white"  adClass={"shadow-lg  text-md"}>{soc.text}</Badge>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialSideBar;
