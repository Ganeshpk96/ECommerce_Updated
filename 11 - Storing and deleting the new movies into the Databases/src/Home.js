import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import classes from "./Home.module.css";
import { db } from "./firebase-config";
import {
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	doc,
} from "firebase/firestore";
import { async } from "@firebase/util";

const Home = () => {
	const [newMovie, setNewMovie] = useState("");
	const [newOpeningText, setNewOpeningText] = useState("");

	const [movie, setMovie] = useState([]);
	const movieCollectionRef = collection(db, "movies");

	useEffect(() => {
		const getMovies = async () => {
			const data = await getDocs(movieCollectionRef);
			// console.log(data);
			setMovie(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getMovies();
		deleteMovies();
	});

	const deleteMovies = async (id) => {
		const movieDoc = doc(db, "movies", id);
		await deleteDoc(movieDoc);
	};

	useEffect(() => {
		setTimeout(() => {
			const hidecont = (document.querySelector(".hideContent").style.display =
				"none");
		}, 1);
	}, []);

	const createMovies = async () => {
		await addDoc(movieCollectionRef, {
			Title: newMovie,
			openingText: newOpeningText,
		});
		document.getElementById("mo").value = "";
		document.getElementById("ot").value = "";
	};

	return (
		<div>
			<Card
				className="mb-2 p-5 text-center bg-info text-white"
				style={{ borderRadius: "0px" }}
			>
				<h1 className="p-1">Home</h1>
			</Card>
			<h2 className="text-center">Movie List</h2>

			<div className="container">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6">
						<div className="mb-3">
							<label className="form-label">Title</label>
							<input
								id="mo"
								className="form-control"
								type="text"
								placeholder="Movie Name"
								onChange={(event) => {
									setNewMovie(event.target.value);
								}}
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Opening Text</label>
							<input
								id="ot"
								className="form-control"
								type="text"
								placeholder="Enter Some Text"
								onChange={(event) => {
									setNewOpeningText(event.target.value);
								}}
							/>
						</div>
						<div className="text-center">
							<button
								className="text-center btn btn-primary"
								onClick={createMovies}
							>
								Add Movie
							</button>
						</div>
					</div>
					<div className="col-md-3"></div>
				</div>
			</div>
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-10">
						<table className="table table-striped">
							<thead>
								<tr>
									<th>#</th>
									<th>Title</th>
									<th>Opening Text</th>
									<th>Delete</th>
								</tr>
							</thead>
							<tbody>
								{movie.map((movie, index) => {
									return (
										<tr>
											<td>{index + 1}</td>
											<td>{movie.Title}</td>
											<td>{movie.openingText}</td>
											<td>
												<button
													className="btn btn-danger"
													onClick={() => {
														deleteMovies(movie.id);
													}}
												>
													Delete
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					<div className="col-md-1"></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
