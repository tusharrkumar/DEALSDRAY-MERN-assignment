import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Registration = () => {
	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");
	let [cnfPassword, setCnfPassword] = useState("");
	let navigate = useNavigate();

	let submitForm = () => {
		let payload = {
			name,
			email,
			cnfPassword,
		};
		if (!name || !email || !cnfPassword) {
			alert("To register Fill all the fields..!");
		} else {
			if (password === cnfPassword) {
				axios
					.post("http://localhost:4001/register", payload)
					.then((e) => {
						alert(e.data);
						navigate("/");
					})
					.catch((e) => {
						alert("problem in sending data to the Backend.!");
					});
			} else {
				alert("both password should be matched..");
			}
		}
	};

	return (
		<div className="bg-pink-200">
		<p className="text-red-500 font-bold text-4xl p-5">LOGO HERE</p>
			<div className="bg-red-200 max-w-[940px]  h-[623px] rounded-3xl border-4 border-green-900 mx-auto shadow-xl scale-75 p-[30px]">
				<h1 className="text-center font-bold text-3xl">Admin Registration Form</h1>
				<div className="bg-rose-50 border-4 border-blue-900 rounded-3xl max-w-[350px] mx-auto my-5 p-10 ">
					<input
						className="bg-yellow-200 border-2 border-violet-400 text-xl text-black my-3 p-1 placeholder-black"
						placeholder="Enter FullName"
						type="text"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
						required
					/>
					<input
						required
						className="bg-yellow-200 border-2 border-violet-400 text-xl text-black my-3 p-1 placeholder-black"
						placeholder="Enter Email"
						type="text"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<input
						required
						className="bg-yellow-200 border-2 border-violet-400 text-xl text-black my-3 p-1 placeholder-black"
						placeholder="Enter Password"
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<input
						className="bg-yellow-200 border-2 border-violet-400 text-xl text-black my-3 p-1 placeholder-black"
						placeholder="Retype Password"
						type="password"
						value={cnfPassword}
						onChange={(e) => {
							setCnfPassword(e.target.value);
						}}
					/>
					<button className="bg-blue-300 ml-5 rounded-lg m-3 p-3 font-bold" onClick={submitForm}>
						Register Me
					</button>
					<p className="font-semibold text-rose-600 m-2">
						Already Have An Account?{" "}
					</p>
					<Button variant="outlined">
							<Link to="/"> Sign In</Link>
					</Button>{" "}
				</div>
			</div>
		</div>
	);
};

export default Registration;
