export const ScrollNews = () => {
    const news = [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
    ]
    
    return (  
            'Lorem ipsum dolor sit amet',
        <div className="ml-2 overflow-hidden w-3/4  ">
            <div className="flex flex-nowrap w-max whitespace-nowrap scoroll-animation">
                {news.map((textNews, index) => (
                    <p className="mx-4" key={index}>
                        {textNews}
                    </p>
                ))}
            </div>
        </div>
    );
}
 