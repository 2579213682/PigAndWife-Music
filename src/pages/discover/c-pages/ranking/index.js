import React, { useEffect, memo } from "react";
import { useDispatch } from "react-redux";

import { getTops } from "./store/actionCreators";

import PigAndWifeTopRanking from "./c-cpns/top-ranking";
import PigAndWifeRankingHeader from "./c-cpns/ranking-header";
import PigAndWifeRankingList from "./c-cpns/ranking-list";
import { RankingWrapper, RankingLeft, RankingRight } from "./style";

export default memo(function PigAndWifeRanking() {
  // redux
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getTops());
  }, [dispatch]);

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <PigAndWifeTopRanking />
      </RankingLeft>{" "}
      <RankingRight>
        <PigAndWifeRankingHeader />
        <PigAndWifeRankingList />
      </RankingRight>{" "}
    </RankingWrapper>
  );
});
