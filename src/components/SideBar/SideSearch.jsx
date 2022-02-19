import {FullButton, MdInput, SideCard} from "../core";


const SideSearch = () => {
    return (
        <SideCard title="Search">
            <form>
                <MdInput type="search" text="search for..." id="search-side"/>
                <FullButton adClass="mt-5 mb-3">
                    Search
                </FullButton>
            </form>
        </SideCard>
    );
};

export default SideSearch;
