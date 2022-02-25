import React from "react";
import style from "../css/bar.module.css";
import { Link } from "react-router-dom";
export default function Bar({ data }) {
  return (
    <div className={data ? style.bar : style.none}>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/assign">assign</Link>
      <br></br>
      <Link to="/subject">subject</Link>
      <br></br>
    </div>
  );
}
