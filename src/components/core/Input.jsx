export const MdInput = ({text, type, ref}) => {
    return (
        <div>
            <input type={type} placeholder={text} ref={ref}
                   className="w-full rounded-lg py-2 px-4 outline-4 border-2 text-gray-700 border-gray-100 outline-indigo-100"/>
        </div>
    );
};

