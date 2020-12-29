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

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer__left">
				{/* <img
					className="footer__albumLogo"
					src={item?.album.images[0].url}
					alt={item?.name}
				/>
				{item ? (
					<div className="footer__songInfo">
						<h4>{item.name}</h4>
						<p>{item.artists.map((artist) => artist.name).join(", ")}</p>
					</div>
				) : (
					<div className="footer__songInfo">
						<h4>No song is playing</h4>
						<p>...</p>
					</div>
				)} */}
				<img
					className="footer__albumLogo"
					src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Bleu_de_Gex.jpg"
					alt=""
				/>
				<div className="footer__songInfo">
					<h4>Yea!</h4>
					<p>Usher</p>
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
