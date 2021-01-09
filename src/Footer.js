import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleFilledOutlined";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
export default function Footer() {
	const [{ track, recentlyPlayed }, dispatch] = useDataLayerValue();
	return (
		<div className="footer">
			<div className="footer__left">
				<img
					className="footer__albumLogo"
					src={
						track !== ""
							? track?.item.album.images[0].url
							: recentlyPlayed?.items[0].track.album.images[0].url
					}
					alt=""
				/>
				<div className="footer__songInfo">
					<h5>
						{track !== ""
							? track?.item.name
							: recentlyPlayed?.items[0].track.name}
					</h5>
					<p>
						{track !== ""
							? track?.item.artists
									.map((item) => {
										return item.name;
									})
									.join(", ")
							: recentlyPlayed?.items[0].track.artists
									.map((item) => {
										return item.name;
									})
									.join(", ")}
					</p>
				</div>
			</div>
			<div className="footer__center">
				<ShuffleIcon className="footer__green" />
				<SkipPreviousIcon className="footer__icon" />
				<PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
				<SkipNextIcon className="footer__icon" />
				<RepeatIcon className="footer__green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby="continuous-slider" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
