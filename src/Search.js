import React from "react";
import "./Search.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
function Card({ images, name }) {
	console.log("images", images);
	return (
		<div
			style={{
				borderRadius: "5px 5px 5px 5px",
				marginRight: ".8em",
				marginBottom: "1em",
			}}
		>
			<div
				style={{ width: "220px" }}
				className="Home__Cards__Card search__text"
			>
				<h3>{name}</h3>
				<img className="search__img" src={images} />
			</div>
		</div>
	);
}
function Search() {
	const [{ categories }, dispatch] = useDataLayerValue();
	console.log("categories", categories);
	return (
		<div className="search">
			<Header />
			<h2>Browse all</h2>
			<div className="search__cards">
				{categories?.categories.items.map((item) => {
					console.log(item);
					return <Card images={item.icons[0].url} name={item.name} />;
				})}
			</div>
		</div>
	);
}

export default Search;
