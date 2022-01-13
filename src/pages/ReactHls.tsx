import React, { RefObject } from 'react';
import ReactHlsPlayer from 'react-hls-player';

export default function Player() {
  const playerRef = React.useRef();

  return (
    // <video
    //   src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    //   ref={playerRef as unknown as RefObject<HTMLVideoElement>}
    //   autoPlay={true}
    //   controls={true}
    // />
    // <video id="my_video_1" className="video-js vjs-default-skin" controls preload="auto" width="640" height="268"
    //        data-setup='{}'>
    //   <source src="http://iphone-streaming.ustream.tv/uhls/3064708/streams/live/iphone/playlist.m3u8" type='application/x-mpegURL'/>
    // </video>
    <ReactHlsPlayer
      src="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
      // src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
      playerRef={playerRef as unknown as RefObject<HTMLVideoElement>}
      autoPlay={true}
      controls={false}
      width="100%"
      height="auto"
      hlsConfig={{
        autoStartLoad: true,
        startPosition: -1,
        debug: true,
      }}
    />
  );
}
