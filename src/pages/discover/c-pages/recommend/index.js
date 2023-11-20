import React, { memo } from "react";

import PigAndWifeTopBanner from "./c-cpns/top-banner";
import PigAndWifeHotRecommend from "./c-cpns/hot-recommend";
import PigAndWifeNewAlbum from "./c-cpns/new-album";
import PigAndWifeRankingList from "./c-cpns/ranking-list";
import PigAndWifeUserLogin from "./c-cpns/user-login";
import PigAndWifeSettleSinger from "./c-cpns/settle-singer";
import PigAndWifeHotRadio from "./c-cpns/hot-radio";
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

export default memo(function PigAndWifeRecommend() {
  return (
    <RecommendWraper>
      <PigAndWifeTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <PigAndWifeHotRecommend />
          <PigAndWifeNewAlbum />
          <PigAndWifeRankingList />
        </RecommendLeft>{" "}
        <RecommendRight>
          <PigAndWifeUserLogin />
          <PigAndWifeSettleSinger />
          <PigAndWifeHotRadio />
        </RecommendRight>{" "}
      </Content>{" "}
    </RecommendWraper>
  );
});
