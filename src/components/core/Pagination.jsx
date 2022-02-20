const Pagination = ({pageNumber , active , setLimit , plimit}) => {
    if(pageNumber < 8){
        return (
            <ul className="flex w-fit space-x-2  rounded-lg overflow-hidden font-bold text-gray-600">
                {Array(pageNumber).fill().map((_,index)=>(
                    <li key={index}  >
                        <button
                              className={`block rounded-lg border-indigo-600 border-2 shadow py-1.5 px-2 ${active===index ? ' text-indigo-800' : ' bg-indigo-700 text-white'}`}
                              onClick={()=>setLimit({start:index*plimit , end:(index+1)*plimit})}>
                            {index+1}
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
    else {
        return (
            <ul className="flex w-fit font-bold space-x-2 text-gray-600">

                {active > 2&& (<li className="px-3 py-1">...</li>)}

                {Array(active < pageNumber-4 ? 3 : pageNumber-active-2).fill().map((_,index)=>(
                    index+active>0 &&<li key={index}  >
                        <button
                              className={`block rounded-lg  text-white border-indigo-600 border-2 shadow py-1.5 px-2 ${active===(index+active-1) ? ' text-indigo-800' : ' text-white bg-indigo-700'}`}
                              onClick={()=>setLimit({start:(index+active-1)*plimit , end:(index+active)*plimit})}>
                            {index+active}
                        </button>
                    </li>
                ))}

                {active < pageNumber-4 &&(<li className=" py-1 px-3">...</li>)}

                {Array(3).fill().map((_,index)=>(
                    active<pageNumber && <li key={pageNumber+(index-3)} >
                        <button
                              className={`block rounded-lg shadow border-indigo-600 border-2 py-1.5 px-2 ${active===(pageNumber+(index-3)) ? ' text-indigo-800' : ' text-white bg-indigo-700'}`}
                              onClick={()=>setLimit({start:(pageNumber+(index-3))*plimit , end:(pageNumber+(index-2))*plimit})}>
                            {(pageNumber+(index-2))}
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Pagination;