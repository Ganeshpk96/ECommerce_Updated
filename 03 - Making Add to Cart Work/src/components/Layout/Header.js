import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>The Generics</h1>
				<ul style={{ display: "flex", justifyContent: "center" }}>
					<li style={{ listStyle: "none", padding: "0px 20px " }}>
						<a href="#" style={{ color: "#ffffff", textDecoration: "none" }}>
							HOME
						</a>
					</li>
					<li style={{ listStyle: "none", padding: "0px 20px " }}>
						<a href="#" style={{ color: "#ffffff", textDecoration: "none" }}>
							STORE
						</a>
					</li>
					<li style={{ listStyle: "none", padding: "0px 20px " }}>
						<a href="#" style={{ color: "#ffffff", textDecoration: "none" }}>
							ABOUT
						</a>
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
