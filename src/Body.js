import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";
import { useEffect } from "react";
const Body = ({ spotify, playListID }) => {
	const [{ getPlaylist }, dispatch] = useDataLayerValue();
	useEffect(() => {
		console.log("playlistID", playListID);
		spotify.getPlaylist(playListID).then((getPlaylist) => {
			console.log("response of getPlayList", getPlaylist);
			dispatch({
				type: "GET_PLAYLIST",
				getPlaylist: getPlaylist,
			});
		});
	}, []);
	console.log("body", getPlaylist);
	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="body__info">
				<img src={getPlaylist?.images[0].url} alt="discover weekly" />
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p>{getPlaylist?.description}</p>
				</div>
			</div>
			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilledIcon className="body__shuffle" />
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>
				{getPlaylist?.tracks.items.map((item) => (
					<SongRow
						key={Math.random().toString(36).substring(7)}
						track={item.track}
					/>
				))}
			</div>
			<h1>render</h1>
			{console.log(getPlaylist)}
		</div>
	);
};
export default Body;
