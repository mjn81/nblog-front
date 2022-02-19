import {MdInput} from "../core";

export const BackDrop = () => {
    return (
        <div className="fixed w-full h-full top-0 bg-black opacity-60 z-50">
        </div>
    );
}

export const Searchbar = () => {

    return (
        <form className="fixed top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 z-50" onClick={e=>e.stopPropagation()}>
            <MdInput type="search" text="search for something..." name="search" />
        </form>
    );
};

