import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

const DashBord = () => {
	let [name, setname] = useState("");
	let ID = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:4001/user/${ID.ID}`)
			.then((e) => {
				setname(e.data);
			})
			.catch(() => {
				console.log("unable to fetch data in Edit comp");
			});
	}, []);

	return (
		<div>
			{/* <h1 className="bg-yellow-200 p-4">DashBord-Section</h1> */}
			<p className="bg-yellow-200 text-red-500 text-center font-bold text-4xl p-5">DashBord-Section</p>
			<p className="bg-blue-200 text-center font-bold text-4xl p-5">Welcome To Admin Panel</p>
			<div id="navbar" className="bg-green-400 p-5">
				<ul className="flex gap-24 justify-center">
					<li><b>HOME</b></li>
					<li>
						<Button variant="text">
							<Link to="/create-employee"><b>Create Employee</b></Link>
						</Button>{" "}
					</li>
					<li>
						<Button variant="text">
							<Link to="/employee-list"> <b>Employee list</b> </Link>
						</Button>{" "}
					</li>
					<li className="p-2 text-red-500 border border-dashed font-bold border-red-400 ">{name}</li>
					<li><b>Logout</b></li>
				</ul>
			</div>
		</div>
	);
};

export default DashBord;
