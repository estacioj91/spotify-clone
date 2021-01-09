import React from "react";
import "./SongRow.css";
function SongRow({ track = "test", count }) {
	function millisToMinutesAndSeconds(millis) {
		var minutes = Math.floor(millis / 60000);
		var seconds = ((millis % 60000) / 1000).toFixed(0);
		return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
	}
	return (
		<div className="songRow__Container songSelect">
			<span style={{ flex: "0.01" }}>{count}</span>
			<div className="songRow" style={{ flex: ".45" }}>
				<img
					className="songRow__album"
					src={track.album.images[0].url}
					alt=""
				/>
				<div className="songRow__info">
					<h1>{track.name}</h1>
					<p>{track.artists.map((artist) => artist.name).join(", ")}</p>
				</div>
			</div>
			<div style={{ flex: "0.3", color: "#b3b3b3" }}>{track.album.name}</div>
			<div style={{ flex: "0.3", color: "#b3b3b3" }}>
				{millisToMinutesAndSeconds(track.duration_ms)}
			</div>
		</div>
	);
}

export default SongRow;
