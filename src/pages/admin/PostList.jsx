import React, {useState} from 'react';
import {SimpleCard} from "../../components/core";
import Table from "../../components/core/Table";
import Pagination from "../../components/core/Pagination";

const PostList = () => {
    const p = [{
        id: 1,
        title: 'Lorem ipsum dolor si',
        like:5,
        created_at: '2020-19-12',
        updated_at: '2021-20-1',
        status:'draft'
    },{
        id: 2,
        title: 'Lorem ipsum dolor si',
        like:5,
        created_at: '2020-19-12',
        updated_at: '2021-20-1',
        status:'draft'
    },{
        id: 3,
        title: 'Lorem ipsum dolor si',
        like:5,
        created_at: '2020-19-12',
        updated_at: '2021-20-1',
        status:'draft'
    },{
        id: 4,
        title: 'Lorem ipsum dolor si',
        like:5,
        created_at: '2020-19-12',
        updated_at: '2021-20-1',
        status:'draft'
    },{
        id: 5,
        title: 'Lorem ipsum dolor si',
        like:5,
        created_at: '2020-19-12',
        updated_at: '2021-20-1',
        status:'draft'
    },]
    const pnum = 3;
    const plimit = 12;
    const [limit , setLimit] = useState({start:0 , end:plimit});
    const active = limit.start/plimit;
    return (
        <div className="mx-16 mt-6">
            <SimpleCard>
                <h2 className="text-3xl">Your Post's</h2>
                <div className="mt-6 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <Table data={p} />
                </div>
                <div className="w-full flex items-center justify-center pt-6">
                    <Pagination pageNumber={pnum} active={active} plimit={plimit} setLimit={setLimit} />
                </div>
            </SimpleCard>
        </div>
    );
};

export default PostList;
