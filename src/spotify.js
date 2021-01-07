export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const redirectUriLocal = "https://spotify-reproduction.netlify.app/";
const clientId = "face699fdc1448eea55cd5572d2d8efc";
const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
];
export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			var parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${
	window.location.hostname === "localhost" ? redirectUri : redirectUriLocal
}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
