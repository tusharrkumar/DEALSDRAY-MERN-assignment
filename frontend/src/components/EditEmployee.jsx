import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [phone, setPhone] = useState();
	let [designation, setDesignation] = useState();
	let [gender, setGender] = useState();
	let [courses, setCourses] = useState([]);
	let [image, setImage] = useState();

	let idObj = useParams();
	let navigate = useNavigate();
	useEffect(() => {
		axios
			.get(`http://localhost:4001/employee-list/${idObj.ID}`)
			.then((e) => {
				setName(e.data.name);
				setEmail(e.data.email);
				setPhone(e.data.phone);
				setDesignation(e.data.designation);
				setGender(e.data.gender);
				setCourses(e.data.course);
			})
			.catch(() => {
				console.log("erro");
			});
	}, []);

	// checkBox handling
	const handleCheckboxChange = (event) => {
		const { value, checked } = event.target;
		if (checked) {
			setCourses([...courses, value]);
		} else {
			setCourses(courses.filter((course) => course !== value));
		}
	};

	let formHandle = (e) => {
		e.preventDefault();
		let payload = {
			name: name,
			email: email,
			phone: phone,
			image: image,
			designation: designation,
			gender: gender,
			course: courses,
		};
		axios
			.put(`http://localhost:4001/employee-list/${idObj.ID}`, payload, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((e) => {
				alert(e.data);
			})
			.catch(() => {
				console.log("err ");
			});

		navigate("/employee-list");
	};

	return (
		<div className="bg-blue-200">
		<p className="bg-yellow-200 text-red-500 text-center font-bold text-4xl p-5">Update Employee Details</p>
			<div className="bg-red-200 max-w-[940px]  h-[623px] rounded-3xl border-4 border-green-900 mx-auto shadow-xl scale-75 p-[10px]">
			<h1 className="text-center font-bold text-3xl my-3">Update Employee Data</h1>
			<div className="bg-rose-50 border-4 border-blue-900 rounded-3xl max-w-[350px] mx-auto my-5 p-10">
				<input
					className="bg-yellow-200 border-2 border-violet-400 text-xl text-black my-3 p-1 placeholder-black"
					placeholder="Enter FullName"
					type="text"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<input
					className="bg-yellow-200 border-2 border-violet-400 text-xl text-black my-3 p-1 placeholder-black"
					placeholder="Enter Email"
					type="text"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<input
					className="bg-yellow-200 border-2 border-violet-400 text-xl text-black my-3 p-1 placeholder-black"
					placeholder="Enter Phone Number"
					type="text"
					value={phone}
					onChange={(e) => {
						setPhone(e.target.value);
					}}
				/>

				{/* designation dropdown */}

				<label htmlFor="" className="m-1 text-indigo-600"><b>Designation</b></label>
				<select
					name="designation"
					value={designation}
					onChange={(e) => setDesignation(e.target.value)}
					className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
					<option value="HR">HR</option>
					<option value="Manager">Manager</option>
					<option value="Sales">Sales</option>
				</select>

				{/* Gender radio button */}

				<label htmlFor="" className="m-1 text-indigo-600"><b>Gender</b></label>
				<input
					type="radio"
					id="male"
					name="gender"
					value="Male"
					checked={gender === "Male"}
					onChange={(e) => setGender(e.target.value)}
				/>
				<label htmlFor="male"> Male </label>
				<input
					type="radio"
					id="female"
					name="gender"
					value="Female"
					checked={gender === "Female"}
					onChange={(e) => setGender(e.target.value)}
				/>
				<label htmlFor="female"> Female </label>
				<br />

				{/* Courses check boxes */}

				<label className="m-1 text-indigo-600"><b>Course</b></label>
				<input
					type="checkbox"
					id="MCA"
					name="course"
					value="MCA"
					checked={courses.includes("MCA")}
					onChange={handleCheckboxChange}
				/>
				<label htmlFor="MCA"> MCA </label>
				<input
					type="checkbox"
					id="BCA"
					name="course"
					value="BCA"
					checked={courses.includes("BCA")}
					onChange={handleCheckboxChange}
				/>
				<label htmlFor="BCA"> BCA </label>
				<input
					type="checkbox"
					id="BSC"
					name="course"
					value="BSC"
					checked={courses.includes("BSC")}
					onChange={handleCheckboxChange}
				/>
				<label htmlFor="BSC"> BSC </label>

				<label htmlFor="" className="m-1 text-red-600"><b>Upload Your Photo</b></label>
				<br />
				<input
					className=""
					type="file"
					name="image"
					onChange={(e) => {
						setImage(e.target.files[0]);
					}}
				/>
				<br />
				<button className="bg-blue-300 ml-12 rounded-lg m-3 p-3 font-bold" onClick={formHandle}>
					{" "}
					Update Changes
				</button>
			</div>
		</div>
		</div>
	);
};

export default EditEmployee;
