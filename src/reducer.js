export const initialState = {
	user: null,
	playlist: [],
	playing: false,
	item: null,
	// token:
	// 	"BQD2o4YSdLDq5waqHzRJC_OkiVU8Nuyb9Ht-oxjSBJd98ynhgX73ZcV5WHYC-elW-Ay1ESXS9LvGp5E7UPCHZKUzEsapHUoOSpy9bEmbyIRRPkeCAyXikn1LKMTpK7t8gqSkuU94BlKiu637LEJZaKSJb9OnwfNsiSpEEV4bI3yaGWR1",
};
export const reducer = (state, action) => {
	console.log("action:", action);
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};
		case "SET_CURRENTLY_PLAYING":
			return {
				...state,
				track: action.track,
			};
		case "SET_RECENTLY_PLAYED":
			return {
				...state,
				recentlyPlayed: action.recentlyPlayed,
			};
		case "GET_PLAYLIST":
			return {
				...state,
				getPlaylist: action.getPlaylist,
			};
		case "GET_CATEGORIES":
			return {
				...state,
				categories: action.categories,
			};
		case "GET_CATEGORIES_PLAYLIST":
			return {
				...state,
				categoriesPlaylist: action.categoriesPlaylist,
			};
		case "GET_SAVED_TRACK":
			return {
				...state,
				savedTrack: action.savedTrack,
			};
		case "GET_NEW_RELEASES":
			return {
				...state,
				newReleases: action.newReleases,
			};
		case "GET_TOP_TRACKS":
			return {
				...state,
				topTracks: action.topTracks,
			};
		default:
			return state;
	}
};
