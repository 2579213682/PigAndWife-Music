import React, { memo } from "react";

import PigAndWifeRadioCategory from "./c-cpns/radio-category";
import PigAndWifeRadioRecommend from "./c-cpns/radio-recommend";
import PigAndWifeRadioRanking from "./c-cpns/radio-ranking";
import { DjRadioWrapper } from "./style";

export default memo(function PigAndWifeDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <PigAndWifeRadioCategory />
      <PigAndWifeRadioRecommend />
      <PigAndWifeRadioRanking />
    </DjRadioWrapper>
  );
});
