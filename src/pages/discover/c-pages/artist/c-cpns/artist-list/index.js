import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import PigAndWifeThemeHeaderNormal from "@/components/theme-header-normal";
import PigAndWifeAlphaList from "./c-cpns/alpha-list";
import PigAndWifeArtistItem from "./c-cpns/artist-item";
import { ArtistListWrapper } from "./style";

export default memo(function PigAndWifeArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(
    (state) => ({
      currentType: state.getIn(["artist", "currentType"]),
      artistList: state.getIn(["artist", "artistList"]),
    }),
    shallowEqual
  );

  return (
    <ArtistListWrapper>
      <PigAndWifeThemeHeaderNormal title={currentType.name} />{" "}
      <PigAndWifeAlphaList />
      <div className="artist-list">
        {" "}
        {artistList.map((item, index) => {
          return (
            <PigAndWifeArtistItem key={item.id} index={index} info={item} />
          );
        })}{" "}
      </div>{" "}
    </ArtistListWrapper>
  );
});
