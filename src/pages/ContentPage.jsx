import ContentLayout from "../layouts/ContentLayout";
import {SectionCard} from "../components/core";
import {Post} from "../components/core/Post";
import {useParams} from "react-router-dom";

const ContentPage = () => {
    const {title} = useParams();
    const p = [
        {
            id: 1,
            title: 'newBlog',
            categories: [
                {title: 'newp', color:' bg-rose-400'},
                {title: 'categories',color:' bg-lime-600'},
                {title: 'mjn',color:' bg-pink-600'},
                {title: 'author',color:' bg-blue-400'},
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img: 'https://via.placeholder.com/1920x1080',
            date: {
                day:'13',
                month:'july'
            },
        }
    ]
    return (
        <section className="mt-8">
            <ContentLayout>
                <SectionCard title={title==='categories' ? 'All' : title}>
                    {p.map(({id, title, img, description, date, categories}) => (
                        <Post key={id} id={id} title={title} img={img} description={description}
                              date={date} badges={categories}/>
                    ))}
                </SectionCard>
            </ContentLayout>
        </section>
    );
}

export default ContentPage;