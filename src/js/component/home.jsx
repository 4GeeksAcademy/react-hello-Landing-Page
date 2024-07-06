import React from "react";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"

const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="row">
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
			</div>
			<div className="row">

				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
			</div>
			<Footer />

		</div>
	);
};

export default Home;
