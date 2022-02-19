import {InfoSeparator, MdInput, SimpleCard} from "../core";
import {CommentItem , CommentForm} from "./CommentBody";

const CommentSection = () => {

    const comments = [{
        id: 1,
        title: 'hello world',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum natus nihil. Beatae ipsa itaque, libero perspiciatis praesentium ut velit?',
        user: {
            username: 'mjn',
            avatar: 'https://i.pravatar.cc/300',
        },
    },]

    return (
        <SimpleCard>
            {(!!comments.length) && <InfoSeparator title={`${comments.length} comments`}/>}
            <section className="grid gap-3">
                {comments.map((comment) => (
                    <CommentItem key={comment.id} title={comment.title} text={comment.text} author={comment.user}/>
                ))}
            </section>
            <InfoSeparator title="write your opinion" />
            <CommentForm />
        </SimpleCard>
    );
};

export default CommentSection;
