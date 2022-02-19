import {SideCard} from "../core";
import {Link} from "react-router-dom";

const LatestNews = () => {
    const p = [
        {
            id: 1,
            title: 'newBlog ',
            categories: [
                {title: 'newp', color: ' bg-rose-400'},
                {title: 'categories', color: ' bg-lime-600'},
                {title: 'mjn', color: ' bg-pink-600'},
                {title: 'author', color: ' bg-blue-400'},
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img: 'https://via.placeholder.com/1920x1080',
            date: {
                day: '13',
                month: 'july',
                year: '2020'
            },
        },
        {
            id: 2,
            title: 'newBlog ',
            categories: [
                {title: 'newp', color: ' bg-rose-400'},
                {title: 'categories', color: ' bg-lime-600'},
                {title: 'mjn', color: ' bg-pink-600'},
                {title: 'author', color: ' bg-blue-400'},
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img: 'https://via.placeholder.com/1920x1080',
            date: {
                day: '13',
                month: 'july',
                year: '2020'
            },
        },
    ];

    const maxLength = 15;

    return (
        <SideCard title="Latest news">
            <ul className="pb-2">
                {p.map((post, index) => (
                    <li key={post.id}
                        className={"flex py-2.5 border-dashed border-gray-200 mx-2" + (index < p.length - 1 ? ' border-b-2' : '')}>
                        <Link to={`/post-page/${post.id}`}><img src={post.img} alt={post.title}
                                                               className="w-12 h-12 rounded-full border-2 transition-colors duration-200 ease-in hover:border-indigo-600"/></Link>
                        <section className="ml-3">
                            <Link to={`/post-page/${post.id}`}
                                  className="whitespace-nowrap text-gray-700 transition-colors duration-200 ease-in hover:text-indigo-800">
                                {post.title.substring(0, maxLength) + (post.title.length > maxLength ? '...' : '')}
                            </Link>
                            <p className="text-gray-400 text-sm font-light">{post.date.day + ' ' + post.date.month + ' ' + post.date.year}</p>
                        </section>
                    </li>
                ))}
            </ul>
        </SideCard>
    );
};

export default LatestNews;
