import React from "react";
import { Link } from "react-router-dom";

export default function VideoPlay() {


  return (
    <div>
      <ul>
        <Link
          to={{
            pathname: "/hls",
            search: "?sort=name",
            hash: "#the-hash",
          }}
        >hls</Link>
      </ul>
      <ul>
        <Link
          to={{
            pathname: "/player",
            // search: "?sort=name",
            // hash: "#the-hash",
          }}
        >player</Link>
      </ul>
      <ul>
        <Link
          to={{
            pathname: "/videojs",
            search: "?sort=name",
            hash: "#the-hash",
          }}
        >vjs</Link>
      </ul>
      <ul>
        <Link
          to="/vjs2"
        >vjs2</Link>
      </ul>
    </div>
  );
}
