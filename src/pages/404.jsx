import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigator = useNavigate();
    const goBackHistory = () => {
        navigator(-1);
    }

    return (<div className="text-center text-6xl bg-slate-100 text-indigo-400 font-bold h-screen flex flex-col space-y-8 justify-center items-center">
        Page Not Found

        <button onClick={goBackHistory} className="cursor-pointer italic underline text-4xl mt-8">
            Go Back to previous Page
        </button>
    </div> );
}
 
export default NotFound;