import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	Routes,
	Route,
	Link,
	createRoutesFromElements,
	Router,
} from "react-router-dom";
import { useState } from "react";
import { ReactDOM } from "react";
import Home from "./Home";
import About from "./About";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Contact from "./Contact";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};

	return (
		<CartProvider>
			{cartIsShown && <Cart onClose={hideCartHandler} />}

			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>

			<Routes>
				<Route path="/" exact element={<CartProvider />} />
				<Route path="/Home" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
		</CartProvider>
	);
}

export default App;
