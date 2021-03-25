import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://b8g9x2x5.rocketcdn.me/wp-content/uploads/2018/08/spotify-logo-1920x1080_fouoik.jpg"
        alt=""
      />

      <a href={loginUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;
