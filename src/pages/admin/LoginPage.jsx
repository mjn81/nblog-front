import { useNavigate, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer , toast } from 'react-toastify';
import {
	FullButton,
	Label,
	MdInput,
	Row,
	SimpleCard,
} from "../../components/core";
import { login } from "../../api";

const LoginPage = () => {
	const navigator = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onLoginClick = (e) => {
		e.preventDefault();
		login({
			username,
			password,
		})
			.then((res) => {
				localStorage.setItem("token", res.data.access);
				localStorage.setItem("rtoken", res.data.refresh);
				navigator("/user/dashboard");
			})
			.catch((err) => {
				toast.error(err.response.data.detail);
			});
	};
	if (localStorage.getItem("token")) {
		return <Navigate to="/user/dashboard" />;
	}

	return (
		<div className="w-full h-screen flex items-center justify-center">
			<ToastContainer />
			<form className="w-1/5">
				<SimpleCard extraClass="min-w-[350px]">
					<Row>
						<h1 className="text-center text-3xl">Login</h1>
					</Row>
					<Row>
						<Label text="username" src="usr" />
						<MdInput
							type="text"
							text="enter username"
							name="username"
							id="usr"
							value={username}
							setValue={setUsername}
						/>
					</Row>
					<Row>
						<Label text="password" src="psw" />
						<MdInput
							type="password"
							text="enter password"
							name="password"
							id="psw"
							value={password}
							setValue={setPassword}
						/>
					</Row>
					<FullButton adClass="mt-3" onClick={onLoginClick}>
						Login
					</FullButton>
					<div className=" text-center mt-3 flex flex-col">
						<Link to="/user/register" className=" text-indigo-600 underline">
							Don't have an account? Register
						</Link>
						<Link to="/" className="mt-2 text-gray-600 underline">
							Go Back to home
						</Link>
					</div>
				</SimpleCard>
			</form>
		</div>
	);
};

export default LoginPage;
