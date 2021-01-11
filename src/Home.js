import React from "react";
import "./Home.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
function Card({ images, artist, track }) {
	return (
		<div
			style={{
				backgroundColor: "#181818",
				borderRadius: "5px 5px 5px 5px",
				marginRight: "1.2em",
			}}
		>
			<div style={{ width: "220px" }} className="Home__Cards__Card">
				<img src={images} />
				<h4>{track}</h4>
				<h5>{artist}</h5>
			</div>
		</div>
	);
}
function Cards({ data }) {
	console.log(data?.items);
	return (
		<div className="Home_Cards">
			{data?.items.slice(0, 5).map((item) => {
				return (
					<Card
						key={Math.random().toString(36).substring(7)}
						images={
							item.track
								? item.track.album.images[1].url
								: item.images
								? item.images[1].url
								: item.album.images[1].url
						}
						artist={
							item.track
								? item.track.artists
										.map((item) => {
											return item.name;
										})
										.join(", ")
								: item.artists
										.map((item) => {
											return item.name;
										})
										.join(", ")
						}
						track={item.track ? item.track.name : item.name}
					/>
				);
			})}
		</div>
	);
}
function Home() {
	const [
		{ recentlyPlayed, newReleases, topTracks },
		dispatch,
	] = useDataLayerValue();
	return (
		<div className="home">
			<Header />
			<h1
				style={{
					color: "white",
					paddingBottom: "1.5em",
					paddingTop: ".5em",
				}}
			>
				Recently Played
			</h1>
			<Cards data={recentlyPlayed} />
			<h1
				style={{
					color: "white",
					paddingBottom: "1.5em",
					paddingTop: "1.5em",
				}}
			>
				New Releases
			</h1>
			<Cards data={newReleases?.albums} />
			<h1
				style={{
					color: "white",
					paddingBottom: "1.5em",
					paddingTop: "1.5em",
				}}
			>
				Your Top Tracks
			</h1>
			<Cards data={topTracks} />
		</div>
	);
}

export default Home;
