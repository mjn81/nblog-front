import { Link } from "react-router-dom";

export const ScrollNews = () => {
    const news = [
        {
            title:'Lorem ipsum dolor sit amet',
            path: '/path'
        },
        {
            title:'Lorem ipsum dolor sit amet',
            path: '/path'
        },{
            title:'Lorem ipsum dolor sit amet',
            path: '/path'
        },{
            title:'Lorem ipsum dolor sit amet',
            path: '/path'
        },
    ]
    
    return (  
            'Lorem ipsum dolor sit amet',
        <div className="ml-2 overflow-hidden w-1/2 sm:w-3/4  ">
            <div className="flex flex-nowrap w-max whitespace-nowrap scoroll-animation">
                {news.map((textNews, index) => (
                    <Link to={textNews.path} className="mx-4 hover:text-indigo-200" key={index}>
                        {textNews.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
 