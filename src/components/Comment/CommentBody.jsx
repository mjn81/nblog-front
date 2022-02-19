
import {FullButton, Label, MdInput, SquareButton, TextArea} from "../core";

export const CommentItem = ({title, text, author , setStatus }) => {

    return (
        <section className="flex bg-gray-100 items-start p-6 rounded">
            <div className="text-center">
                <img src={author.avatar} className="rounded-full overflow-hidden w-28 object-cover"
                     alt={`https://ui-avatars.com/api/?name=${author.username}`}/>
                <p className="text-gray-500 mt-2">{author.username}</p>
            </div>
            <div className="ml-6">
                <h4 className="mb-2 text-2xl font-bold">{title} :</h4>
                <p className="font-light">
                    {text}
                </p>
                <SquareButton onClick={() => setStatus({username:author.username , st:true})}  bgColor=' bg-gray-300' adclass="text-gray-700 mt-6 text-sm">
                    response
                </SquareButton>
            </div>

        </section>
    );
};

export const CommentForm = () => {
    //todo: if not login disable commenting -> redux
    return (
        <form className="grid gap-3">
            <Label src="cmt-title" text="title"/>
            <MdInput type="text" text="title..." id="cmt-title"/>
            <Label src="cmt-text" text="comment"/>
            <TextArea text="enter your comment..." id="cmt-text"/>
            <div className="grid gap-6 px-8 pt-4 pb-2">
                <FullButton adClass="shadow-md">
                    Submit
                </FullButton>
            </div>
        </form>
    );
}