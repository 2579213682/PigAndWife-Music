import React, { memo } from "react";

import PigAndWifeArtistCategory from "./c-cpns/artist-category";
import PigAndWifeArtistList from "./c-cpns/artist-list";
import { PigAndWifeArtistWrapper } from "./style";

export default memo(function PigAndWifeArtist() {
  return (
    <PigAndWifeArtistWrapper>
      <div className="content wrap-v2">
        <PigAndWifeArtistCategory />
        <PigAndWifeArtistList />
      </div>{" "}
    </PigAndWifeArtistWrapper>
  );
});
