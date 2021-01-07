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
					<Link to={`/${playlist.id}`}>
						<SidebarOption
							key={Math.random().toString(36).substring(7)}
							title={playlist.name}
						/>
					</Link>
				))}
			</div>
			<Switch>
				<Route path="/playlist">
					<Body spotify={spotify} />
				</Route>
				<Route path="/search">
					<Search />
				</Route>
				<Route path="/library">
					<Library />
				</Route>
				{playlists?.items?.map((playlist) => {
					return (
						<Route path={`/${playlist.id}`}>
							<Body
								key={playlist.id}
								spotify={spotify}
								playListID={playlist.id}
							/>
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
