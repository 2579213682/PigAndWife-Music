import React, { useEffect, memo, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";

import { getRecommend } from "../../store/actionCreators";

import { RecommendWrapper } from "./style";

import PigAndWifeThemeHeaderRCM from "@/components/theme-header-rcm";
import PigAndWifeThemeCover from "@/components/theme-cover";

export default memo(function PigAndWifeHotRecommend() {
  // redux
  const state = useSelector(
    (state) => ({
      recommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getRecommend());
  }, [dispatch]);

  const keywordClick = useCallback(
    (keyword) => {
      history.push({ pathname: "/discover/songs", cat: keyword });
    },
    [history]
  );

  return (
    <RecommendWrapper>
      <PigAndWifeThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
        keywordClick={keywordClick}
      />{" "}
      <div className="recommend-list">
        {" "}
        {state.recommends.slice(0, 8).map((item, index) => {
          return <PigAndWifeThemeCover info={item} key={item.id} />;
        })}{" "}
      </div>{" "}
    </RecommendWrapper>
  );
});
