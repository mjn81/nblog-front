import {useState, useRef} from 'react';
import JoditEditor from "jodit-react";

import {FullButton, Label, MdInput, Row, SimpleCard} from "../../components/core";
import Select from "../../components/core/Select";
const AddPost = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    // published, archived, draft
    const stats = [
        {
            text:'publish',
            value:'published'
        },{
            text:'archive',
            value:'archived'
        },{
            text:'draft',
            value:'draft'
        },
    ]

    return (
        <div className="grid grid-cols-4 gap-6 mx-16 mt-6">
            <div className="col-span-3">
                <SimpleCard>
                    <h2 className="text-3xl">Add Post</h2>
                    <form className="my-6">
                        <Row>
                            <Label text="title" src="title" />
                            <MdInput type="text" text="add title..." name="title" id="title" />
                        </Row>
                        <div className="max-h-[600px] overflow-y-scroll">
                            <Row>
                                <Label text="content" />
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    tabIndex={6} // tabIndex of textarea
                                    onBlur={newContent => {setContent(newContent)}}
                                />
                            </Row>
                        </div>
                    </form>
                </SimpleCard>
            </div>
            <div className="col-span-1">
                <SimpleCard>
                    <Row>
                        <Label text="status" src="stSelect" />
                        <Select optList={stats} id="stSelect" />
                    </Row>
                    <Row>
                        <FullButton>
                            Add
                        </FullButton>
                    </Row>
                </SimpleCard>
            </div>
        </div>
    );
};

export default AddPost;
