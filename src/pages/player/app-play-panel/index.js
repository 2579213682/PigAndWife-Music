import React, { memo } from "react";

import PigAndWifePlayHeader from "./c-cpns/play-header";
import PigAndWifePlayList from "./c-cpns/play-list";
import PigAndWifeLyricPanel from "./c-cpns/lyric-panel";
import { PanelWrapper } from "./style";

export default memo(function PigAndWifeAppPlayList() {
  return (
    <PanelWrapper>
      <PigAndWifePlayHeader />
      <div className="main">
        <img
          className="image"
          src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg"
          alt=""
        />
        <PigAndWifePlayList />
        <PigAndWifeLyricPanel />
      </div>{" "}
    </PanelWrapper>
  );
});
