import { Link } from "react-router-dom";

export const ScrollNews = ({news}) => {
    
    return (  
            'Lorem ipsum dolor sit amet',
        <div className="ml-2 overflow-hidden w-1/2 sm:w-3/4 relative">
            <div className="flex flex-nowrap w-max whitespace-nowrap absolute scroll-animation">
                {news.map((obj, index) => (
                    <Link to={`/post-page/${obj.id}`} className="mx-4 hover:text-indigo-200" key={index}>
                        {obj.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
 