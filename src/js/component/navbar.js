import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";

export const Navbar = () => {
	const{store, actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3 px-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Starwars Blog</span>
			</Link>
			<button className="btn btn-warning dropdown-toggle ms-auto mt-1 mb-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites
			</button>
			<div className="ml-auto dropdown-menu dropdown-menu-end">
				<ul>
					{store.favorites.map((favorite, index) => (
						<li className="navbar d-flex justify-content-between dropdown-menu-item" key={index}>
							<div>{favorite.name}</div>
							<div className="deleteFav mx-2" onClick={()=>actions.deleteFav(favorite.name)}>
								<i className="fas fa-trash-alt"></i>
							</div>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
