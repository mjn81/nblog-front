
const Select = ({optList ,id}) => {

    return (
        <select id={id} className="bg-white w-full text-gray-700 border-2 rounded-xl p-3 focus:outline outline-2 cursor-pointer outline-indigo-600">
            {optList.map((opt , index)=> (
                <option value={opt.value}>{opt.text}</option>
            ))}
        </select>
    );
};

export default Select;
