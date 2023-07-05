import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>
					<h1>The Generics</h1>
				</Link>
				<ul style={{ display: "flex", justifyContent: "center" }}>
					<li style={{ listStyle: "none", padding: "0px 20px " }}>
						<Link
							to="/Home"
							style={{ color: "#ffffff", textDecoration: "none" }}
						>
							HOME
						</Link>
					</li>
					<li style={{ listStyle: "none", padding: "0px 20px " }}>
						<Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>
							STORE
						</Link>
					</li>
					<li style={{ listStyle: "none", padding: "0px 20px " }}>
						<Link
							to="/About"
							style={{ color: "#ffffff", textDecoration: "none" }}
						>
							ABOUT
						</Link>
					</li>
				</ul>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			{/* <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div> */}
		</Fragment>
	);
};

export default Header;
