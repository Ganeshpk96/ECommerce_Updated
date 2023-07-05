import React from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { db } from "./firebase-config";
import {
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	doc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { useState } from "react";

const Contact = (props) => {
	const [name, setName] = useState();
	const [emailID, setEmailId] = useState();
	const [phonenumber, setPhoneNumber] = useState();
	const [message, setMessage] = useState(false);
	const ContactCollectionRef = collection(db, "contact");
	// useEffect(() => {
	// 	const getMovies = async () => {
	// 		const data = await getDocs(movieCollectionRef);
	// 		// console.log(data);
	// 		setMovie(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	// 	};
	// 	getMovies();
	// });
	const createContact = async () => {
		await addDoc(ContactCollectionRef, {
			Name: name,
			EmailID: emailID,
			Phone: phonenumber,
		});
		setMessage(true);
		setTimeout(() => {
			setMessage(false);
		}, 3000);
		document.getElementById("na").value = "";
		document.getElementById("em").value = "";
		document.getElementById("pn").value = "";
	};
	useEffect(() => {
		setTimeout(() => {
			const hidecont = (document.querySelector(".hideContent").style.display =
				"none");
		}, 1);
	}, []);
	return (
		<div>
			<Card
				className="mb-2 p-5 text-center bg-secondary text-white"
				style={{ borderRadius: "0px" }}
			>
				<h1 className="p-1">Contact Us</h1>
			</Card>
			<div className="container">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6">
						{message ? <h3>Your request has been submitted</h3> : null}
						<div className="mb-3">
							<label className="form-label">Name</label>
							<input
								id="na"
								className="form-control"
								type="text"
								placeholder="Enter your name"
								onChange={(event) => {
									setName(event.target.value);
								}}
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Email ID</label>
							<input
								id="em"
								className="form-control"
								type="text"
								placeholder="Enter your email"
								onChange={(event) => {
									setEmailId(event.target.value);
								}}
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Phone Number</label>
							<input
								id="pn"
								className="form-control"
								type="text"
								placeholder="Enter your phone number"
								onChange={(event) => {
									setPhoneNumber(event.target.value);
								}}
							/>
						</div>
						<div className="text-center">
							<button
								className="text-center btn btn-primary"
								onClick={createContact}
							>
								Submit
							</button>
						</div>
					</div>
					<div className="col-md-3"></div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
