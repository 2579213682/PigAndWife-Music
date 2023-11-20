import React, { memo } from "react";

import PigAndWifePlayerInfo from "./c-cpns/player-info";
import PigAndWifePlayerComment from "./c-cpns/player-comment";
import PigAndWifePlayerSongs from "./c-cpns/player-songs";
import PigAndWifePlayerRelevant from "./c-cpns/player-relevant";
import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

export default memo(function PigAndWifePlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <PigAndWifePlayerInfo />
          <PigAndWifePlayerComment />
        </PlayerLeft>{" "}
        <PlayerRight>
          <PigAndWifePlayerSongs />
          <PigAndWifePlayerRelevant />
        </PlayerRight>{" "}
      </div>{" "}
    </PlayerWrapper>
  );
});
