import {Link, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import ContentLayout from "../layouts/ContentLayout";
import {Badge, SimpleCard} from "../components/core";
import {faCalendar, faComments, faUser} from "@fortawesome/free-regular-svg-icons";
import {useEffect} from "react";
import CommentSection from "../components/Comment/Comment";

const PostPage = () => {
    const {id} = useParams();
    const p = {
        id: 1,
        title: 'Lorem ipsum dolor si',
        categories: [
            {title: 'newp', color: ' bg-rose-400'},
            {title: 'categories', color: ' bg-lime-600'},
            {title: 'mjn', color: ' bg-pink-600'},
            {title: 'author', color: ' bg-blue-400'},
        ],
        author: 'mjn',
        description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, expedita.</p>',
        img: 'https://via.placeholder.com/1920x1080',
        date: {
            day: '13',
            month: 'july',
            year: '2020'
        },
    }
    const comments = [{
        id: 1,
        title: 'hello world',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum natus nihil. Beatae ipsa itaque, libero perspiciatis praesentium ut velit?',
        user: {
            username: 'mjn',
            avatar: 'https://i.pravatar.cc/300',
        },
        replies: [
            {
                id: 1,
                title: 'hello world',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum natus nihil. Beatae ipsa itaque, libero perspiciatis praesentium ut velit?',
                user: {
                    username: 'mjn2',
                    avatar: 'https://i.pravatar.cc/300',
                },
            },{
                id: 2,
                title: 'hello world',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum natus nihil. Beatae ipsa itaque, libero perspiciatis praesentium ut velit?',
                user: {
                    username: 'mjn2',
                    avatar: 'https://i.pravatar.cc/300',
                },
            }
        ],
    }, {
        id: 2,
        title: 'hello world',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum natus nihil. Beatae ipsa itaque, libero perspiciatis praesentium ut velit?',
        user: {
            username: 'mjn',
            avatar: 'https://i.pravatar.cc/300',
        },
    },];

    useEffect(() => {
        const content = document.querySelector('#content');
        content.innerHTML = p.description;
    }, [p]);

    return (
        <div className="my-8">
            <ContentLayout>
                <SimpleCard>
                    <article className="main-article sm:p-4">
                        <header className="flex flex-wrap items-center justify-between">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-medium mb-2">{p.title}</h1>
                            <section className="flex flex-wrap h-fit w-fit">
                                {p.categories.map((cat, index) => (
                                    <Badge key={index} adClass="mr-1 mb-1.5 lg:mb-0" bgColor={cat.color}>{cat.title}</Badge>
                                ))}
                            </section>
                        </header>
                        <section className="rounded-lg overflow-hidden mb-5 mt-2">
                            <img src={p.img} alt={p.title} className="object-cover"/>

                        </section>
                        <section className="flex flex-col lg:flex-row mb-3 text-gray-700">
                            <span>
                                <FontAwesomeIcon icon={faUser} className="mr-1.5"/>written by :
                                <Link to="" className="text-indigo-700">{p.author}
                                </Link>
                            </span>
                            <span className="lg:ml-5"><FontAwesomeIcon icon={faCalendar}
                                                                    className="mr-1.5"/>
                                published at : {p.date.day + ' ' + p.date.month + ' ' + p.date.year}
                            </span>
                            <span className="lg:ml-5"><FontAwesomeIcon icon={faComments} className="mr-1.5"/>
                                comments : {comments.length}
                            </span>
                        </section>
                        <section id="content" className="content">

                        </section>
                    </article>
                </SimpleCard>
                <CommentSection comments={comments}/>
            </ContentLayout>
        </div>

    );
};

export default PostPage;
