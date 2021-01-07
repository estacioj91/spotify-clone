import React, { useEffect } from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import Home from "./Home";
import { useDataLayerValue } from "./DataLayer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Player = ({ spotify }) => {
	const [{ getPlaylist, playlists }, dispatch] = useDataLayerValue();
	// useEffect(() => {
	// 	if (playlists) {
	// 		playlists?.items?.map((playlist) => {
	// 			console.log("playlist", playlist.id);
	// 			spotify.getPlaylist(playlist.id).then((getPlaylist) => {
	// 				console.log("response of getPlayList", getPlaylist);
	// 				dispatch({
	// 					type: "GET_PLAYLIST",
	// 					getPlaylist: getPlaylist,
	// 				});
	// 			});
	// 		});
	// 	}
	// }, [playlists]);
	console.log("fasdfsadf", playlists, getPlaylist);
	return (
		<Router>
			<div className="player">
				<div className="player__body">
					<Sidebar spotify={spotify} />
					<Footer />
				</div>
			</div>
		</Router>
	);
};
export default Player;
