import React from "react";
import VideoJS from '../components/VJs2' // point to where the functional component is stored

const VJs2Player = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: true,
    muted: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"}
    ]
  }

  // @ts-ignore
  const handlePlayerReady = (myPlayer) => {
    playerRef.current = myPlayer;

    // you can handle player events here
    myPlayer.on('waiting', () => {
      console.log('player is waiting');
    });

    myPlayer.on('dispose', () => {
      console.log('player will dispose');
    });
    console.log(myPlayer.muted());
    console.log(myPlayer.volume())
    // player.dispose()
    // set
    // myPlayer.src({src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"})
    // myPlayer.ready(function() {
    //   myPlayer.play();
    // });
    // myPlayer.muted(true)
    // // player.isFullscreen(true);
    // // myPlayer.requestFullscreen();
    // myPlayer.volume(0.5)
    // myPlayer.currentTime(0.5);
    // myPlayer.play();
    // player.muted(false)
  };

  // const changePlayerOptions = () => {
  //   // you can update the player through the Video.js player instance
  //   if (!playerRef.current) {
  //     return;
  //   }
  //   // [update player through instance's api]
  //   playerRef.current.src([{src: 'http://ex.com/video.mp4', type: 'video/mp4'}]);
  //   playerRef.current.autoplay(false);
  // };

  return (
    <>
      <div>Rest of app here</div>

      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />

      <div>Rest of app here</div>
    </>
  );
}

export default VJs2Player;
