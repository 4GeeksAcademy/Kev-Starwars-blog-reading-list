import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/CharacterCard.jsx";
import { PlanetCard } from "../component/PlanetCard.jsx";
import { StarshipCard } from "../component/StarshipCard.jsx";
import "../../styles/home.css";
import { useParams } from "react-router";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams()
	const characters = store.characters
	const planets = store.planets
	const ships = store.ships
	let shipImages = store.shipImages
	let planetImages = store.planetImages

	return (
		<div className="container-fluid" id="homePage">

			<div className="row mt-4 justify-content-center ">
				<div className="col-12" >
				{/* <div className="col-12" style={{ width: "90%"}}> */}
					<h1>Characters</h1>
					<div className="row card-row d-flex flex-nowrap flex-row">
						{characters?.map((character, index) => {
							return <CharacterCard name={character.name} imageIndex={index + 1} birth_year={character.birth_year} height={`${character.height/100}m`} eye_color={character.eye_color} link={"/characters/"+index} key={index} id={index} type={`characters`} />
						})}
					</div>
				</div>
			</div>
			
			<div className="row mt-4 justify-content-center ">
				<div className="col-12" >
				{/* <div className="col-12" style={{ width: "90%"}}> */}
					<h1>Planets</h1>
					<div className="row card-row d-flex flex-nowrap flex-row">
						{planets?.map((planet, index) => {
							return <PlanetCard name={planet.name} imageURL={planetImages[index]} population={planet.population} climate={planet.climate} terrain={planet.terrain} link={"/planets/"+index} key={index} />
						})}
					</div>
				</div>
			</div>
			<div className="row mt-4 justify-content-center ">
				<div className="col-12" >
				{/* <div className="col-12" style={{ width: "90%"}}> */}
					<h1>Starships</h1>
					<div className="row card-row d-flex flex-nowrap flex-row">
						{ships?.map((ship, index) => {
							return <StarshipCard name={ship.name} imageURL={shipImages[index]} manufacturer={ship.manufacturer} cost={ship.cost_in_credits} passengers={ship.passengers} link={"/starships/"+index} key={index} />
						})}
					</div>
				</div>
			</div>

		</div>
	)
};
