import React from "react";
import "./Sidebar.css";
import Body from "./Body";
import Home from "./Home";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./Search";
import Library from "./Library";
const Sidebar = ({ spotify }) => {
	const [{ playlists }, dispatch] = useDataLayerValue();
	var count = 0;
	var Colors = {};
	Colors.names = {
		1: "#808000",
		2: "#f0ffff",
		3: "#f5f5dc",
		4: "#000000",
		5: "#0000ff",
		6: "#a52a2a",
		cyan: "#00ffff",
		darkblue: "#00008b",
		darkcyan: "#008b8b",
		darkgrey: "#a9a9a9",
		darkgreen: "#006400",
		darkkhaki: "#bdb76b",
		darkmagenta: "#8b008b",
		darkolivegreen: "#556b2f",
		darkorange: "#ff8c00",
		darkorchid: "#9932cc",
		darkred: "#8b0000",
		darksalmon: "#e9967a",
		darkviolet: "#9400d3",
		fuchsia: "#ff00ff",
		gold: "#ffd700",
		green: "#008000",
		indigo: "#4b0082",
		khaki: "#f0e68c",
		lightblue: "#add8e6",
		lightcyan: "#e0ffff",
		lightgreen: "#90ee90",
		lightgrey: "#d3d3d3",
		lightpink: "#ffb6c1",
		lightyellow: "#ffffe0",
		lime: "#00ff00",
		magenta: "#ff00ff",
		maroon: "#800000",
		navy: "#000080",
		olive: "#808000",
		orange: "#ffa500",
		pink: "#ffc0cb",
		purple: "#800080",
		violet: "#800080",
		red: "#ff0000",
		silver: "#c0c0c0",
		white: "#ffffff",
		yellow: "#ffff00",
	};
	Colors.random = function (count) {
		var result;
		result = Colors.names[count + 1];
		return result;
	};
	return (
		<Router>
			<div className="sidebar">
				<img
					className="sidebar__logo"
					src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
					alt="logo"
				/>
				<Link to="/">
					<SidebarOption title="Home" Icon={HomeIcon} />
				</Link>
				<Link to="/search">
					<SidebarOption title="Search" Icon={SearchIcon} />
				</Link>
				<Link to="/library">
					<SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
				</Link>

				<br />
				<strong className="sidebar__title"> PLAYLISTS</strong>
				<hr />
				{playlists?.items?.map((playlist) => (
					<Link
						key={Math.random().toString(36).substring(7)}
						to={`/${playlist.id}`}
					>
						<SidebarOption
							key={Math.random().toString(36).substring(7)}
							title={playlist.name}
						/>
					</Link>
				))}
			</div>
			<Switch>
				<Route path="/search">
					<Search />
				</Route>
				<Route path="/library">
					<Library />
				</Route>
				{playlists?.items?.map((playlist) => {
					return (
						<Route key={playlist.id} path={`/${playlist.id}`}>
							<Body
								key={playlist.id}
								spotify={spotify}
								playListID={playlist.id}
								color={Colors.random(count)}
							/>
							{count++}
						</Route>
					);
				})}
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};
export default Sidebar;
