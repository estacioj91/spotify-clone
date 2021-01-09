import React from "react";
import "./Library.css";
import { useDataLayerValue } from "./DataLayer";
function Card({ images, artist, track }) {
	return (
		<div
			style={{
				backgroundColor: "#181818",
				borderRadius: "5px 5px 5px 5px",
				margin: "2em .8em",
				flex: ".2",
				maxWidth: "13em",
			}}
		>
			<div style={{ width: "13em" }} className="library__Cards__Card">
				<img src={images} />
				<div className="library__text">
					<h4>{artist}</h4>
					<h6>{track}</h6>
				</div>
			</div>
		</div>
	);
}
function Cards() {
	const [{ playlists }, dispatch] = useDataLayerValue();
	console.log(playlists);
	return (
		<div className="library_Cards">
			<div className="library__items_liked">
				<div
					style={{
						background:
							"linear-gradient(149.46deg,#450af5,#8e8ee5 99.16%)",
						borderRadius: "5px 5px 5px 5px",
						margin: "2em .8em",
						flex: ".2",
						height: "275px",
					}}
				>
					<div className="library__Cards__Card">
						<div className="library__text">
							<span>Cosmic</span>
						</div>
					</div>
				</div>
			</div>
			{playlists?.items.map((item) => {
				return (
					<Card
						key={Math.random().toString(36).substring(7)}
						images={item.images[1].url}
						artist={item.name}
						track={item.owner.display_name}
					/>
				);
			})}
		</div>
	);
}
function Library() {
	return (
		<div className="library">
			<h2>Playlists</h2>

			<div className="library__items">
				<Cards />
			</div>
		</div>
	);
}

export default Library;
