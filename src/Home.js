import React from "react";
import "./Home.css";
import { useDataLayerValue } from "./DataLayer";
function Card({ images, artist, track }) {
	return (
		<div
			style={{
				backgroundColor: "#181818",
				borderRadius: "5px 5px 5px 5px",
				margin: "0 .8em",
			}}
		>
			<div style={{ width: "13em" }} className="Home__Cards__Card">
				<img src={images} />
				<h4>{track}</h4>
				<h5>{artist}</h5>
			</div>
		</div>
	);
}
function Cards() {
	const [{ recentlyPlayed }, dispatch] = useDataLayerValue();
	return (
		<div className="Home_Cards">
			{recentlyPlayed?.items.slice(0, 6).map((item) => {
				return (
					<Card
						key={Math.random().toString(36).substring(7)}
						images={item.track.album.images[1].url}
						artist={item.track.artists
							.map((item) => {
								return item.name;
							})
							.join(", ")}
						track={item.track.name}
					/>
				);
			})}
		</div>
	);
}
function Home() {
	return (
		<div className="home">
			<h1 style={{ color: "white", paddingBottom: ".5em" }}>
				Recently Played
			</h1>
			<Cards />
		</div>
	);
}

export default Home;
