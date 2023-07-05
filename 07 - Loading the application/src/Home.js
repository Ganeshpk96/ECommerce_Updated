import React, {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from "./Home.module.css";
 
const Home = () => {
	const [movies, setMovies] = useState([])
	const [isloading, setIsloading] = useState(false)
	function getMovieList() {
		setIsloading(true);
		fetch('https://swapi.dev/api/films/').then((response) => {
			return  response.json();
		 
		}).then((data) => {
			setTimeout(() => {
				setIsloading(false);
			console.log(data.results)
			setMovies(data.results);
			}, 4000);
		})
	}
 
	useEffect(() => {
		setTimeout(() => {
			const hidecont = document.querySelector('.AvailableMeals_meals__Zw9sI').style.display = 'none';
		}, 1)
	  })
	  console.log(movies)
	return (
		<div>
    
        <Card className="mb-2 p-5 text-center bg-secondary text-white" style={{borderRadius : '0px'}}>
        <h1 className='p-1'>Home</h1>
           
	 
             
         
        </Card>
		<Button className={classes.buttonClass} onClick={getMovieList}>Check the Movies List</Button>
		 {isloading === true ? <h1 style={{textAlign: "center"}}>Loading please wait...</h1> : 
		 <div className='p-4 container'>
		 { movies.map((item, index) => {
			  var a = item.created;
			  var dateformat = new Date(item.created)
			  console.log(dateformat)
			 
			  return (
				  <div className="tour-item"  key={index} style={{display: 'flex', borderBottom: '1px solid black', padding: '10px'}}>
				  <div className={classes.tourdate}>{a.slice(0, 10)} </div>
				  <span className={classes.tourplace}>{item.director}</span>
				  <span className={classes.tourspecplace}>{item.opening_crawl}</span>
				  <a href={item.url} target="_blank" className={classes.buybtn}>BUY TICKETS</a>
			  </div>
			  )
		   
	  })}
		 </div>
		
		}
     
    </div>
	);
};

export default Home;
