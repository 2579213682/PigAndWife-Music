import React, { memo } from "react";

import { HeaderWrapper } from "./style";

export default memo(function PigAndWifeThemeHeaderPlayer(props) {
  const { title } = props;

  return (
    <HeaderWrapper>
      <h3> {title} </h3>{" "}
    </HeaderWrapper>
  );
});
