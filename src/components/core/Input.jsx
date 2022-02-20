export const MdInput = ({text, type, name = '', ref, id}) => {
    return (
        <div>
            <input type={type} placeholder={text} name={name} ref={ref} id={id}
                   className="w-full rounded-lg py-2 px-4 outline-2 border-2 text-gray-700 border-gray-100 focus:outline outline-indigo-100"/>
        </div>
    );
};

export const PortalInput = ({text, name, ref}) => {
    return (
        <input type="search" placeholder={text} name={name} ref={ref}
               className="p-6 w-[356px] lg:w-[1020px] rounded-3xl  focus:outline outline-indigo-500 outline-4 text-white bg-opacity-30 bg-black text-xl"/>

    );
};


export const TextArea = ({text, ref, id, name}) => {
    return (
        <textarea name={name} id={id} ref={ref} cols="30" rows="10" placeholder={text}
                  className="border-2 border-gray-300 border-dashed outline-offset-2
                  outline-8 text-gray-700 rounded-xl p-6 outline-indigo-200 resize-none">

        </textarea>
    );
};