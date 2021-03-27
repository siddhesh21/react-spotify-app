export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQAhUzwi4lQt1wNkXYwj4hwOPuTLsi1W6q0Y9mGXm4bx5NrdTs4rHoTC9xJbScEaKTCdpaRfv68ntcfan3RKMbMS_Cz1SiUMrx-2KevkpAKFptWW-juuNT5gUACR6lDQjYorfjYgSPn5SF1-oWMs2y0CXEvKyQSmbCsxvcZWA7vZUhaW-Puk",
};

const reducer = (state, action) => {
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

    default:
      return state;
  }
};

export default reducer;
