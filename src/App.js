import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import { NewReleases } from "@material-ui/icons";
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

			spotify.getMyCurrentPlayingTrack().then((track) => {
				dispatch({
					type: "SET_CURRENTLY_PLAYING",
					track: track,
				});
			});
			spotify.getMyRecentlyPlayedTracks().then((recentlyPlayed) => {
				dispatch({
					type: "SET_RECENTLY_PLAYED",
					recentlyPlayed: recentlyPlayed,
				});
			});
			spotify.getCategories().then((categories) => {
				dispatch({
					type: "GET_CATEGORIES",
					categories: categories,
				});
			});
			spotify.getCategoryPlaylists("toplists").then((categoriesPlaylist) => {
				dispatch({
					type: "GET_CATEGORIES_PLAYLIST",
					categoriesPlaylist: categoriesPlaylist,
				});
			});
			spotify.getMySavedTracks().then((savedTrack) => {
				dispatch({
					type: "GET_SAVED_TRACK",
					savedTrack: savedTrack,
				});
			});
			spotify.getNewReleases().then((newReleases) => {
				dispatch({
					type: "GET_NEW_RELEASES",
					newReleases: newReleases,
				});
			});
			spotify.getMyTopTracks().then((topTracks) => {
				dispatch({
					type: "GET_TOP_TRACKS",
					topTracks: topTracks,
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
