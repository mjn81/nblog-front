
const Select = ({optList ,id , setValue}) => {

    return (
        <select id={id} onChange={(e) => setValue(e.currentTarget.value)} className="bg-white w-full text-gray-700 border-2 rounded-xl p-3 focus:outline outline-2 cursor-pointer outline-indigo-600">
            {optList.map((opt , index)=> (
                <option key={index} value={opt.value}>{opt.text}</option>
            ))}
        </select>
    );
};

export default Select;
