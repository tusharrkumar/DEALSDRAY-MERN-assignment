import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";

const Login = () => {
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");
	let navigate = useNavigate();

	let login = () => {
		let payload = { email, password };
		axios.post("http://localhost:4001/login", payload).then((e) => {
			if (e.data.status === "success") {
				navigate(`/dashbord/${e.data.id}`);
			} else if (e.data.status === "fail") {
				alert("wrong password");
			} else if (e.data.status === "noUser") {
				alert("Invalid Email");
			}
		});
	};

	return (
		<div className="bg-pink-200">
		<p className="text-red-500 font-bold text-4xl p-5">LOGO HERE</p>

			<div className="bg-red-200 max-w-[940px]  h-[623px] rounded-3xl border-4 border-green-900 mx-auto shadow-xl scale-75 p-[80px]">
				<h1 className="text-center font-bold text-3xl my-3">Login Form</h1>
				<div className="bg-rose-50 border-4 border-blue-900 rounded-3xl max-w-[330px] mx-auto my-5 p-10">
					<input
						className="bg-yellow-200 border-2 border-violet-400 text-xl text-black my-3 p-1 placeholder-black"
						placeholder="Enter Email"
						type="text"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<br />
					<input
						className="bg-yellow-200 border-2 border-violet-400 text-xl text-black my-3 p-1 placeholder-black"
						placeholder="Enter Password"
						type="text"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<button className="bg-blue-300 ml-12 rounded-lg m-3 p-3 font-bold" onClick={login}>
						LOGIN
					</button>
					<br />
					<p className="font-semibold text-rose-600 m-1">
						Don't have Account?{" "}
					</p>
					<Button variant="outlined">
							<Link to="/register"> Sign Up</Link>
					</Button>{" "}
				</div>
			</div>
		</div>
	);
};

export default Login;
