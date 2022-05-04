import React from 'react';
import {SimpleCard} from "../../components/core";
import Table from "../../components/core/Table";
import { useFetchUserPost } from '../../hooks';
// import Pagination from "../../components/core/Pagination";

const PostList = () => {
    const { data } = useFetchUserPost();
    // const plimit = 12;
    // const [limit , setLimit] = useState({start:0 , end:plimit});
    // const active = limit.start/plimit;
    return (
        <div className="mx-16 mt-6">
            <SimpleCard>
                <h2 className="text-3xl">Your Post's</h2>
                <div className="mt-6 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    {data && <Table data={data.results} />}
                </div>
                {/* <div className="w-full flex items-center justify-center pt-6">
                    <Pagination pageNumber={pnum} active={active} plimit={plimit} setLimit={setLimit} />
                </div> */}
            </SimpleCard>
        </div>
    );
};

export default PostList;
