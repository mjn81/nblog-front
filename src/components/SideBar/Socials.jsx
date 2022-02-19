import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {icons , socialData} from "../icons";

const SocialSideBar = () => {
    //todo: add some text
    return (
        <div>
            <ul className="grid gap-3">
                {socialData.map((soc)=> (
                    <li key={soc.id} className={'rounded-md py-2 px-4 ' +soc.color}>
                        <a href={soc.link} className="flex items-center ">
                            <FontAwesomeIcon icon={icons[soc.icon_id]} className="text-4xl text-white" />
                            <p className="text-white flex-grow ml-3 text-md">{soc.title}</p>

                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialSideBar;
