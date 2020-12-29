export const initialState = {
	user: null,
	playlist: [],
	playing: false,
	item: null,
	token:
		"BQD2o4YSdLDq5waqHzRJC_OkiVU8Nuyb9Ht-oxjSBJd98ynhgX73ZcV5WHYC-elW-Ay1ESXS9LvGp5E7UPCHZKUzEsapHUoOSpy9bEmbyIRRPkeCAyXikn1LKMTpK7t8gqSkuU94BlKiu637LEJZaKSJb9OnwfNsiSpEEV4bI3yaGWR1",
};
export const reducer = (state, action) => {
	console.log(action);
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
		default:
			return state;
	}
};