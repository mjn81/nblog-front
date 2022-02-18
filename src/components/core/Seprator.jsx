import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const TitleSeparator = ({title , icon=null , isSmall=false}) => {
    return (
        <section className={"w-full bg-white rounded-md py-5 flex justify-between" + (isSmall ? ' text-lg' :  ' text-xl')}>
            <h3 className="px-5 leading-5 border-l-4 border-indigo-600">{title}</h3>
            {icon&&<FontAwesomeIcon icon={icon} className="px-5 text-gray-300"/>}
        </section>
    );
};

