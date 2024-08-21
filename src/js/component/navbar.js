import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";

export const Navbar = () => {
	const{store, actions} = useContext(Context)

	return (
		<nav className="navbar navbar-dark bg-dark mb-3 px-5">
			<Link to="/" style={{textDecoration: "none"}}>
				<span className="navbar-brand mb-0 h1">Starwars Blog</span>
			</Link>
			<span className="ms-auto position-relative">
				<button className="btn btn-warning dropdown-toggle mt-1 mb-0 fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites [{store.favorites.length}]
				</button>
				<div className="dropdown-menu dropdown-menu-end bg-secondary mt-2">
					<ul className="m-0 px-3 w-100" style={{listStyle: "none"}}>
						{store.favorites.length > 0 ? (
							store.favorites.map((favorite, index) => (
								<li className="d-flex flex-nowrap justify-content-between align-items-center w-100 py-1" key={index}>
									<Link 
										to={`/${favorite.type}/${favorite.id}`} 
										className="fw-semibold text-white" 
										style={{
											whiteSpace: "nowrap",
											textDecoration: "none"
										}}
									>
										{favorite.name}
									</Link>
									<div className="deleteFave ms-2" onClick={()=>actions.deleteFave(favorite.name)}>
										<i className="fas fa-trash-alt"></i>
									</div>
								</li>
							))
						) : (
							<li className="text-center fw-semibold text-white">[empty]</li>
						)}
					</ul>
				</div>
			</span>
		</nav>
	);
};
