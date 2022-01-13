import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import ReactHlsPlayer from "../pages/ReactHls";
import VjsPlayer from "../pages/VideoJs";
import HlsPlayer from "../pages/Hls";
import Vjs2Player from "../pages/VJs2";

// ----------------------------------------------------------------------


export default function Route() {
  return useRoutes([
    {
      path: "/",
      element: (
        <Home/>
      )
    },
    {
      path: "/hls",
      element: (
        <HlsPlayer/>
      )
    },
    {
      path: "/player",
      element: (
        <ReactHlsPlayer/>
      )
    },
    {
      path: "/videojs",
      element: (
        <VjsPlayer/>
      )
    },
    {
      path: "/vjs2",
      element: (
        <Vjs2Player/>
      )
    },
  ]);
}

// IMPORT COMPONENTS
