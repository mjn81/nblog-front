import {InfoSeparator, OutlineButton, SimpleCard} from "../core";
import {CommentItem , CommentForm} from "./CommentBody";

import {useState} from "react";

const CommentSection = () => {
    // todo: response answer implement
    const comments = [{
        id: 1,
        title: 'hello world',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum natus nihil. Beatae ipsa itaque, libero perspiciatis praesentium ut velit?',
        user: {
            username: 'mjn',
            avatar: 'https://i.pravatar.cc/300',
        },
    },{
        id: 1,
        title: 'hello world',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum natus nihil. Beatae ipsa itaque, libero perspiciatis praesentium ut velit?',
        user: {
            username: 'mjn',
            avatar: 'https://i.pravatar.cc/300',
        },
    },]
    const [isRes, setIsRes] = useState({username:'' , st:false});
    return (
        <SimpleCard>
            {(!!comments.length) && <InfoSeparator title={`${comments.length} comments`}/>}
            <section className="grid gap-3">
                {comments.map((comment) => (
                    <CommentItem key={comment.id} title={comment.title} text={comment.text} author={comment.user} setStatus={setIsRes} />
                ))}
            </section>
            <InfoSeparator title={isRes.st ?  `response to ${isRes.username}` :"write your opinion"}>
                {isRes.st && <OutlineButton onClick={() => setIsRes({username: '', st: false})} adclass=" text-indigo-400">
                    cancel
                </OutlineButton>}
            </InfoSeparator>
            <CommentForm />
        </SimpleCard>
    );
};

export default CommentSection;
