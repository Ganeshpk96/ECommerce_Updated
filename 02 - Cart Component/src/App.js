import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
const cartElements = [
	{
		title: "Colors",
		price: 100,
		imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
		quantity: 2,
	},
	{
		title: "Black and white Colors",
		price: 50,
		imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
		quantity: 3,
	},
	{
		title: "Yellow and Black Colors",
		price: 70,
		imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
		quantity: 1,
	},
];

const App = () => {
	const [showResults, setShowResults] = useState(false);
	const OpenCart = () => {
		setShowResults(true);
	};
	const CloseBtn = () => {
		setShowResults(false);
	};
	return (
		<>
			<div id="EcommerceContainer">
				<header>
					<ul className="header">
						<li>
							<a href="./index.html">HOME</a>
						</li>
						<li>
							<a href="#">STORE</a>
						</li>
						<li>
							<a href="./about.html">ABOUT</a>
						</li>
						<a href="#" className="cart-holder" onClick={OpenCart}>
							cart<span className="cart-number">0</span>
						</a>
					</ul>
					<h1>The Generics</h1>
				</header>
				<section id="music" className="customwidth">
					<h2>MUSIC</h2>
					<div id="music-content">
						{cartElements.map((value, index) => {
							return (
								<div id="album1" key={index}>
									<h3>Album {index + 1}</h3>
									<div className="image-container">
										<img className="prod-images" src={value.imageUrl} alt="" />
									</div>
									<div className="prod-details">
										<span>
											$<span>{value.price}</span>
										</span>
										<Button variant="info" type="button">
											ADD TO CART
										</Button>
									</div>
								</div>
							);
						})}
					</div>
				</section>
				<section id="merch" className="customwidth">
					<h2>MERCH</h2>
					<div id="merch-content">
						<div id="t-shirt">
							<h3>T-Shirt</h3>
							<div className="image-container">
								<img
									className="prod-images"
									src={require("./images/Shirt.png")}
									alt=""
								/>
							</div>
							<div className="prod-details">
								<span>
									$<span>19.99</span>
								</span>
								<Button variant="info" type="button">
									ADD TO CART
								</Button>
							</div>
						</div>
						<div id="coffee-cup">
							<h3>Coffee Cup</h3>
							<div className="image-container">
								<img
									className="prod-images"
									src={require("./images/Cofee.png")}
									alt=""
								/>
							</div>
							<div className="prod-details">
								<span>
									$<span>6.99</span>
								</span>
								<Button variant="info" type="button">
									ADD TO CART
								</Button>
							</div>
						</div>
					</div>
				</section>
				{showResults ? (
					<section id="cart" className="container">
						<h2>CART</h2>
						<button className="cancel" onClick={CloseBtn}>
							X
						</button>
						<div className="cart-row cart-header">
							<span className="cart-item cart-column">ITEM</span>
							<span className="cart-price cart-column">PRICE</span>
							<span className="cart-quantity cart-column">QUANTITY</span>
						</div>
						<div className="cart-items">
							<div className="cart-row">
								<span className="cart-item cart-column">
									<img className="cart-img" src="img/Shirt.png" alt="" />
									<span>T-Shirt</span>
								</span>
								<span className="cart-price cart-column">$19.99</span>
								<span className="cart-quantity cart-column">
									<input type="text" />
									<button>REMOVE</button>
								</span>
							</div>
							<div className="cart-row">
								<span className="cart-item cart-column">
									<img className="cart-img" src="/img/Album 3.png" alt="" />
									<span>Album 3</span>
								</span>
								<span className="cart-price cart-column">$9.99</span>
								<span className="cart-quantity cart-column">
									<input type="text" />
									<button>REMOVE</button>
								</span>
							</div>
						</div>
						<div className="cart-total">
							<span>
								<span className="total-title">
									{" "}
									<strong>Total</strong>{" "}
								</span>
								$<span id="total-value">0</span>
							</span>
						</div>
						<button className="purchase-btn" type="button">
							PURCHASE
						</button>
					</section>
				) : null}

				<button className="cart-btn-bottom">
					<a href="#cart" className="cart-bottom">
						See the cart
					</a>
				</button>
			</div>

			<div id="customwidth"></div>
			<footer>
				<div className="footer-title">The Generics</div>
				<div className="footer-icons">
					<ul>
						<li>
							<a href="https://www.youtube.com">
								<img src="./img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt="" />
							</a>
						</li>
						<li>
							<a href="https://spotify.com">
								<img src="./img/Spotify Logo.png" alt="" />
							</a>
						</li>
						<li>
							<a href="https://facebook.com">
								<img src="./img/Facebook Logo.png" alt="" />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
};

export default App;
