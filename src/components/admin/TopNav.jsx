import { useContext } from "react";
import userContext from "../../context/UserContext";
import { OutlineButton } from "../core";
import { useNavigate } from "react-router-dom";

export const TopNav = ({ user }) => {
	const navigator = useNavigate();
    const onLogoutHandler = () => {
        localStorage.clear();
        navigator("/user/login");
    };
	return (
		<section className="w-full bg-white px-6 py-4 flex justify-end items-center border-b-2">
			<section className="text-right space-y-1 ">
				<p>{user.username}</p>
				<OutlineButton adclass="hover:underline" onClick={onLogoutHandler}>
					Logout
				</OutlineButton>
			</section>
			<img
				src={
					user.avatar ?? `https://ui-avatars.com/api/?name=${user.username}`
				}
				className="rounded-full border-2 border-indigo-600 ml-6 w-16"
				alt={user.username}
			/>
		</section>
	);
};
