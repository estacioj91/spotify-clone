import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Player = ({ spotify }) => {
	return (
		<Router>
			<div className="player">
				<div className="player__body">
					<Sidebar />
					<Switch>
						<Route path="/1234">
							<Body spotify={spotify} />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
					<Footer />
				</div>
			</div>
		</Router>
	);
};
export default Player;
