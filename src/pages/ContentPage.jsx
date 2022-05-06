import ContentLayout from "../layouts/ContentLayout";
import {SectionCard} from "../components/core";
import {Post} from "../components/core/Post";
import {useParams} from "react-router-dom";
import React, {useState} from "react";
import Pagination from "../components/core/Pagination";
import { useFetchPostCat } from "../hooks";

const ContentPage = () => {
    const plimit = 10;
    const { title } = useParams();
    const [limit , setLimit] = useState({start:0 , end:plimit});
    const active = limit.start/plimit;
    const { data } = useFetchPostCat(title , active+1);
    const pnum = data && Math.ceil(data.count / plimit);
    return (
        <section className="mt-8">
            <ContentLayout>
                <SectionCard title={title}>
                    {data && data.results.map(({id, title, image, description, created_at, categories}) => (
                        <Post key={id} id={id} title={title} img={image} description={description}
                              date={created_at} badges={categories}/>
                    ))}
                </SectionCard>
                <div className="w-full flex items-center justify-center py-6">
                    <Pagination pageNumber={pnum} active={active} plimit={plimit} setLimit={setLimit} />
                </div>
            </ContentLayout>
        </section>
    );
}

export default ContentPage;