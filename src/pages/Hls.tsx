import React, { RefObject, useEffect } from "react";
import Hls from "hls.js";

export default function VideoPlayer () {
  const playerRef = React.useRef() as unknown as HTMLMediaElement;
  const videoSrc = "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
  useEffect(() => {
    if (Hls.isSupported() && playerRef) {
      const video = playerRef;
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
      });
    }
    // if (Hls.isSupported()) {
    //   console.log('----')
    //   var hls = new Hls();
    //   hls.loadSource(videoSrc);
    //   hls.attachMedia(playerRef);
    //   hls.on(Hls.Events.MANIFEST_PARSED, function() { playerRef.play(); });
    // }
    // const hls = new Hls();
    // hls.loadSource(source);
    // hls.attachMedia(playerRef)
  }, [])
  return <video controls ref={playerRef as unknown as RefObject<HTMLVideoElement>} src={videoSrc}/>
}

// export default class VideoPlayer extends React.Component {
//   state = {};
//   private player?: any;
//   private videoNode?: HTMLVideoElement;
//
//   constructor(props: any) {
//     super(props);
//     this.player = undefined;
//     this.videoNode = undefined;
//   }
//   componentDidUpdate() {
//     const video = this.player;
//     const hls = new Hls();
//     const url = "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";
//     console.log('----')
//     hls.loadSource(url);
//     hls.attachMedia(video);
//     hls.on(Hls.Events.MANIFEST_PARSED, function() { video.play(); });
//   }
//   render() {
//     const url = "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";
//     return (
//       <video
//         controls
//         className="videoCanvas"
//         ref={player => (this.player = player)}
//         autoPlay={true}
//         src={url}
//       />
//     );
//   }
// }
