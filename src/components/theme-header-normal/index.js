import React, { memo } from "react";

import { HeaderWrapper } from "./style";

export default memo(function PigAndWifeThemeHeaderNormal(props) {
  const { title, rightSlot } = props;

  return (
    <HeaderWrapper>
      <div className="title"> {title} </div>{" "}
      <div className="right"> {rightSlot} </div>{" "}
    </HeaderWrapper>
  );
});
