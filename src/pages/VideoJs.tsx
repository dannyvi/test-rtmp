import * as React from "react";

import VideoPlayer from "../components/VideoJs";


const videoJsOptions = {
  sources: [
    {src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"}
  ]
};

export default function Player() {
  return (
    <div>
      <VideoPlayer options={videoJsOptions} />
    </div>
  );
}

