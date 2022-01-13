import * as React from "react";
import videojs, { VideoJsPlayer } from "video.js";

// Styles
import "video.js/dist/video-js.css";
import { RefObject } from "react";

interface IVideoPlayerProps {
  options: videojs.PlayerOptions;
}

const initialOptions: videojs.PlayerOptions = {
  controls: true,
  fluid: true,
  controlBar: {
    volumePanel: {
      inline: false
    }
  }
};

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ options }) => {
  const videoNode = React.useRef<HTMLVideoElement>();
  const player = React.useRef<videojs.Player>();

  React.useEffect(() => {
    player.current = videojs(videoNode.current as HTMLVideoElement, {
      ...initialOptions,
      ...options
    }).ready(function() {
      console.log('onPlayerReady', this);
      // (player.current as VideoJsPlayer).play()
      player.current?.play()
    });
    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [options]);

  return <video ref={videoNode as RefObject<HTMLVideoElement>} className="video-js" />;
};

export default VideoPlayer;
