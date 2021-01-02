import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useDataLayerValue();
	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;
		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});
			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user: user,
				});
			});
			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					playlists: playlists,
				});
			});
			spotify.getPlaylist("5R1lo9HpNI1uGYmk0l95Zy").then((response) => {
				dispatch({
					type: "SET_DISCOVER_WEEKLY",
					discover_weekly: response,
				});
			});
			spotify.getMyCurrentPlayingTrack().then((track) => {
				console.log("current track", track);
				dispatch({
					type: "SET_CURRENTLY_PLAYING",
					track: track,
				});
			});
			spotify.getMyRecentlyPlayedTracks().then((recentlyPlayed) => {
				console.log("app", recentlyPlayed);
				dispatch({
					type: "SET_RECENTLY_PLAYED",
					recentlyPlayed: recentlyPlayed,
				});
			});
		}
	}, []);
	return (
		<div className="App">
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
