import {TitleSeparator} from "./Seprator";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";

export const SideCard = ({title, children}) => {
    return (
        <section className="bg-white rounded-lg">
            <div className="flex items-center justify-between">
                <TitleSeparator title={title} isSmall={true}/>
                <FontAwesomeIcon icon={faEllipsis}
                                 className="mr-5 pl-2 py-1 text-gray-400 rounded-lg rounded-r-none border-gray-200 border-2 border-r-0"/>
            </div>
            <div className="px-3 py-1">
                {children}
            </div>
        </section>
    );
};

