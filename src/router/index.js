import React from "react";
import { Redirect } from "react-router-dom";

// import PigAndWifeDiscover from "../pages/discover";
// import PigAndWifeRecommend from "../pages/discover/c-pages/recommend";
// import PigAndWifeRanking from "../pages/discover/c-pages/ranking";
// import PigAndWifeSongs from "../pages/discover/c-pages/songs";
// import PigAndWifeDjradio from "../pages/discover/c-pages/djradio";
// import PigAndWifeArtist from "../pages/discover/c-pages/artist";
// import PigAndWifeAlbum from "../pages/discover/c-pages/album";
// import PigAndWifePlayer from "../pages/player";

// import PigAndWifeFriend from "../pages/friend";
// import PigAndWifeMine from "../pages/mine";

const PigAndWifeDiscover = React.lazy((_) => import("../pages/discover"));
const PigAndWifeRecommend = React.lazy((_) =>
  import("../pages/discover/c-pages/recommend")
);
const PigAndWifeRanking = React.lazy((_) =>
  import("../pages/discover/c-pages/ranking")
);
const PigAndWifeSongs = React.lazy((_) =>
  import("../pages/discover/c-pages/songs")
);
const PigAndWifeDjradio = React.lazy((_) =>
  import("../pages/discover/c-pages/djradio")
);
const PigAndWifeArtist = React.lazy((_) =>
  import("../pages/discover/c-pages/artist")
);
const PigAndWifeAlbum = React.lazy((_) =>
  import("../pages/discover/c-pages/album")
);
const PigAndWifePlayer = React.lazy((_) => import("../pages/player"));

const PigAndWifeFriend = React.lazy((_) => import("../pages/friend"));
const PigAndWifeMine = React.lazy((_) => import("../pages/mine"));

export default [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: PigAndWifeDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to={"/discover/recommend"} />,
      },
      {
        path: "/discover/recommend",
        component: PigAndWifeRecommend,
      },
      {
        path: "/discover/ranking",
        component: PigAndWifeRanking,
      },
      {
        path: "/discover/songs",
        component: PigAndWifeSongs,
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: PigAndWifeDjradio,
      },
      {
        path: "/discover/artist",
        component: PigAndWifeArtist,
      },
      {
        path: "/discover/album",
        component: PigAndWifeAlbum,
      },
      {
        path: "/discover/player",
        component: PigAndWifePlayer,
      },
    ],
  },
  {
    path: "/friend",
    component: PigAndWifeFriend,
  },
  {
    path: "/mine",
    component: PigAndWifeMine,
  },
];
