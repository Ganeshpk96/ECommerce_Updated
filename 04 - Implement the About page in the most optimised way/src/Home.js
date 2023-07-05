import React, {useEffect} from "react";
import Card from 'react-bootstrap/Card';
import classes from "./Home.module.css";
const Home = () => {
	useEffect(() => {
		const hidecont = document.querySelector('.AvailableMeals_meals__Zw9sI').style.display = 'none';
	  },[])
	return (
		<div>
    
        <Card className="mb-2 p-5 text-center bg-secondary text-white" style={{borderRadius : '0px'}}>
        <h1 className='p-1'>Home</h1>
           
	 
             
         
        </Card>
       <div className='p-4 container'>
       <div>
            <div className="tour-item" style={{display: 'flex', borderBottom: '1px solid black', padding: '10px'}}>
                <span className={classes.tourdate}>JUL16</span>
                <span className={classes.tourplace}>DETROIT, MI</span>
                <span className={classes.tourspecplace}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes.buybtn}>BUY TICKETS</button>
            </div>
			<div className="tour-item" style={{display: 'flex', borderBottom: '1px solid black', padding: '10px'}}>
                <span className={classes.tourdate}>JUL19</span>
                <span className={classes.tourplace}>TORONTO,ON</span>
                <span className={classes.tourspecplace}>BUDWEISER STAGE</span>
				<button className={classes.buybtn}>BUY TICKETS</button>
            </div>
			<div className="tour-item" style={{display: 'flex', borderBottom: '1px solid black', padding: '10px'}}>
                <span className={classes.tourdate}>JUL 22</span>
                <span className={classes.tourplace}> BRISTOW, VA</span>
                <span className={classes.tourspecplace}>JIGGY LUBE LIVE</span>
                <button className={classes.buybtn}>BUY TICKETS</button>
            </div>
			<div className="tour-item" style={{display: 'flex', borderBottom: '1px solid black', padding: '10px'}}>
                <span className={classes.tourdate}>JUL 29</span>
                <span className={classes.tourplace}>PHOENIX, AZ</span>
                <span className={classes.tourspecplace}> AK-CHIN PAVILION</span>
				<button className={classes.buybtn}>BUY TICKETS</button>
            </div>
            <div className="tour-item" style={{display: 'flex', borderBottom: '1px solid black', padding: '10px'}}>
                <span className={classes.tourdate}>AUG 2</span>
                <span className={classes.tourplace}>LAS VEGAS, NV</span>
                <span className={classes.tourspecplace}>T-MOBILE ARENA</span>
                <button className={classes.buybtn}>BUY TICKETS</button>
            </div>
			<div className="tour-item" style={{display: 'flex', borderBottom: '1px solid black', padding: '10px'}}>
                <span className={classes.tourdate}>AUG 7</span>
                <span className={classes.tourplace}>CONCORD, CA</span>
                <span className={classes.tourspecplace}> CONCORD PAVILION</span>
				<button className={classes.buybtn}>BUY TICKETS</button>
            </div>
        </div>  
	 
	   </div>
    </div>
	);
};

export default Home;
