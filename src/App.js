import { useEffect, useState } from "react";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import { useDataLayerValue } from "./DataLayer";
import Player from "./components/Player";

//interaction between REACT app and SPOTIFY
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist('37i9dQZF1DWWQRwui0ExPn').then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, [token, dispatch]);

  console.log("THE TOKEN >>>", token);
  console.log("THE USER >>>", user);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
