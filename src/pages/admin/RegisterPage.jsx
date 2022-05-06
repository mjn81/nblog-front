import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast , ToastContainer } from "react-toastify";
import { register } from "../../api";

import {
	FullButton,
	Label,
	MdInput,
	Row,
	SimpleCard,
} from "../../components/core";

const RegisterPage = () => {
    const navigator = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");

	const onRegisterClick = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			toast.error('password and confirm password don\'t match !!')
			return;
		}
		register({
			username,
			password,
			email,
			confirm_password: confirmPassword,
			first_name: fname,
			last_name: lname,
        }).then((res) => {
            setFname("");
            setLname("");
            setEmail("");
            setUsername("");
            setConfirmPassword("");
            setPassword("");
			localStorage.setItem("token", res.data.access);
			localStorage.setItem("rtoken", res.data.refresh);
			navigator("/user/dashboard");
		}).catch((err) => {
			Object.values(err.response.data).forEach((item) => {
				item.forEach((i) => {
					toast.error(i);
				});
			});
        });
	};

	return (
		<div className="w-full h-screen flex items-center justify-center">
			<ToastContainer />
			<form className="w-1/5">
				<SimpleCard extraClass="min-w-[450px]">
					<Row>
						<h1 className="text-center text-3xl">Register</h1>
					</Row>
					<Row>
						<Label text="firstname" src="fname" />
						<MdInput
							type="text"
							text="enter firstname"
							name="fname"
							id="fname"
							value={fname}
							setValue={setFname}
						/>
					</Row>
					<Row>
						<Label text="lastname" src="lname" />
						<MdInput
							type="text"
							text="enter lastname"
							name="lname"
							id="lname"
							value={lname}
							setValue={setLname}
						/>
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
						<Label text="email" src="email" />
						<MdInput
							type="email"
							text="enter your email"
							name="email"
							id="email"
							value={email}
							setValue={setEmail}
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
					<Row>
						<Label text="confirm password" src="cpsw" />
						<MdInput
							type="password"
							text="repeat your password"
							name="cpassword"
							id="cpsw"
							value={confirmPassword}
							setValue={setConfirmPassword}
						/>
					</Row>
					<FullButton adClass="mt-3" onClick={onRegisterClick}>
						Register
					</FullButton>
					<div className=" text-center mt-3 ">
						<Link to="/user/login" className=" text-gray-600 underline">
							Registered? Go back to login
						</Link>
					</div>
				</SimpleCard>
			</form>
		</div>
	);
};

export default RegisterPage;
