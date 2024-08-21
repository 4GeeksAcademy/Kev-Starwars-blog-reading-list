import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import {CharacterDetails} from "./views/CharacterDetails.js"
import {PlanetDetails} from "./views/PlanetDetails.js"
import {StarshipDetails} from "./views/StarshipDetails.js"
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters/:id" element={<CharacterDetails />} />
						<Route path="/planets/:id" element={<PlanetDetails />} />
						<Route path="/starships/:id" element={<StarshipDetails />} />
						<Route path="*" element={<h1>Not found! 404</h1>} />
					</Routes>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
