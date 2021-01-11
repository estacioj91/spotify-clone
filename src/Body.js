import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";
import { useEffect } from "react";
const Body = ({ spotify, playListID, color }) => {
	const [{ getPlaylist, playlists }, dispatch] = useDataLayerValue();
	var headerData = {};
	var count = 1;
	console.log("color", color);
	useEffect(() => {
		spotify.getPlaylist(playListID).then((getPlaylist) => {
			dispatch({
				type: "GET_PLAYLIST",
				getPlaylist: getPlaylist,
			});
		});
	}, []);

	function playlistData() {
		playlists.items.forEach((list) => {
			if (list.id === playListID) {
				headerData = {
					owner: list.owner.display_name,
					name: list.name,
					songs: list.tracks.total,
				};
			}
		});
	}
	playlistData();
	return (
		<div
			className="body"
			style={{ background: `linear-gradient(${color}, rgba(0, 0, 0, 1))` }}
		>
			<Header />
			<div className="body__info">
				<img src={getPlaylist?.images[0].url} alt="discover weekly" />
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h1>{headerData.name}</h1>
					<p>{getPlaylist?.description}</p>
					<div>
						<p>
							<span style={{ fontWeight: "700" }}>
								{headerData.owner}
							</span>{" "}
							•{" "}
							<span style={{ fontSize: "14px" }}>
								{headerData.songs} songs
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilledIcon className="body__shuffle" />
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>
				<div
					style={{
						paddingLeft: ".5em",
						paddingBottom: ".8em",
						fontSize: "12px",
						color: "#b3b3b3",
						borderBottom: "1px solid hsla(0,0%,100%,.1)",
						margin: "0 24px",
					}}
					className="body__list"
				>
					<div style={{ flex: "0.01" }}>
						<span>#</span>
					</div>
					<div style={{ flex: "0.45", paddingLeft: "3.5em" }}>
						<span>TITLE</span>
					</div>
					<div style={{ flex: "0.3", paddingLeft: "4em" }}>
						<span>ALBUM</span>
					</div>

					<div style={{ flex: "0.3" }}>
						<span>DURATION</span>
					</div>
				</div>

				{getPlaylist?.tracks.items.map((item) => (
					<SongRow
						count={count++}
						key={Math.random().toString(36).substring(7)}
						track={item.track}
					/>
				))}
			</div>
		</div>
	);
};
export default Body;
