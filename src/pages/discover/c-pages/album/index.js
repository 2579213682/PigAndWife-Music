import React, { memo } from "react";

import PigAndWifeHotAlbum from "./c-cpns/hot-album";
import PigAndWifeTopAlbum from "./c-cpns/top-album";
import { AblumWrapper } from "./style";

export default memo(function PigAndWifeAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <PigAndWifeHotAlbum />
      <PigAndWifeTopAlbum />
    </AblumWrapper>
  );
});
