import React, { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopData } from "../../store/actionCreators";

import PigAndWifeThemeHeaderRCM from "@/components/theme-header-rcm";
import PigAndWifeTopRanking from "@/components/top-ranking";
import { RankingWrapper } from "./style";

export default memo(function PigAndWifeRankingList() {
  // redux
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => ({
      topUpList: state.getIn(["recommend", "topUpList"]),
      topNewList: state.getIn(["recommend", "topNewList"]),
      topOriginList: state.getIn(["recommend", "topOriginList"]),
    }),
    shallowEqual
  );

  // hooks
  useEffect(() => {
    dispatch(getTopData(19723756));
    dispatch(getTopData(3779629));
    dispatch(getTopData(2884035));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <PigAndWifeThemeHeaderRCM title="榜单" moreLink="/discover/ranking" />
      <div className="tops">
        <PigAndWifeTopRanking info={state.topUpList} />{" "}
        <PigAndWifeTopRanking info={state.topNewList} />{" "}
        <PigAndWifeTopRanking info={state.topOriginList} />{" "}
      </div>{" "}
    </RankingWrapper>
  );
});
