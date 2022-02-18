import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export const TitleSeparator = ({title}) => {
    return (
        <section className=" w-full text-xl bg-white rounded-md py-5 flex justify-between">
            <h3 className="px-5 leading-5 border-l-4 border-indigo-600">{title}</h3>
            <FontAwesomeIcon icon={faBars} className="px-5 text-gray-300" />
        </section>
    );
};

