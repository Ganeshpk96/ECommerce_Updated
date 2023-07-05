import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from "./Home.module.css";

const Home = () => {
	const [movie, setMovie] = useState([])
	const [merge, setMerge] = useState([])
 
	 var store = []
	const MoviesData = (e) => {
		const MovieTitle = document.getElementById("MovieTitle");
		const MovieOpeningText = document.getElementById("MovieOpeningText");
		const ReleaseDate = document.getElementById("ReleaseDate");
		e.preventDefault();
        const MovieData = [{
			'title': MovieTitle.value,
			'openingText': MovieOpeningText.value,
			'ReleaseDate': ReleaseDate.value
		}]
		setMovie([...MovieData, ...movie]);
		 
		
 
	   
	}
   
	useEffect(() => { 
		setTimeout(() => {
			const hidecont = document.querySelector('.AvailableMeals_meals__Zw9sI').style.display = 'none';
		}, 1)
	 
	 
	},[])
 console.log(movie)
	return (
		<div>

			<Card className="mb-2 p-5 text-center bg-secondary text-white" style={{ borderRadius: '0px' }}>
				<h1 className='p-1'>Home</h1>
           </Card>

			{/* <Button className={classes.buttonClass} onClick={getMovieList}>Check the Movies List</Button> */}
			<div className="container">
				<h1 style={{ textAlign: "center" }}> Adding New Movies List</h1>
				<form onSubmit={MoviesData}>
					<div className="mb-3">
						<label className="form-label">Title</label>
						<input type="text" className="form-control" id="MovieTitle" placeholder="Movie title"  />
					</div>
					<div className="mb-3">
						<label className="form-label">Opening Text</label>
						<textarea className="form-control" id="MovieOpeningText" rows="3"  ></textarea>
					</div>
					<div className="mb-3">
						<label className="form-label">Release Date</label>
						<input type="date" className="form-control" id="ReleaseDate" placeholder="Release Date"  />
					</div>
					<button type="submit">submit</button>
				</form>
			</div>
           <div className="container mt-5">
		   <table className="table table-striped">
			<thead>
			 <tr>
			 <th>#</th>
			 <th>Title</th>
			 <th>Opening Text</th>
			 <th> Release Date</th>
			 </tr>
			 </thead>
			 <tbody>
			 { movie.map((item, index)=> {
               console.log(item.title)
				return(
					<tr key={index}> 
					<td> {index + 1} </td>
					<td> {item.title} </td>
					<td> {item.openingText} </td>
					<td> {item.ReleaseDate} </td>
					</tr>
				)
			 })  }
			 
			
			 
		 
				
			 
			 </tbody>
			</table>
		 
		   </div>
            
		</div>
	);
};

export default Home;
