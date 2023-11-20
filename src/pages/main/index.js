import React, { memo, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "@/router";

import PigAndWifeAppHeader from "@/components/app-header";
import PigAndWifeAppFooter from "@/components/app-footer";
import PigAndWifeAppPlayBar from "@/pages/player/app-play-bar";

export default memo(function PigAndWifeMain() {
  return (
    <HashRouter>
      <PigAndWifeAppHeader />
      <Suspense fallback={<div> loading </div>}>
        {" "}
        {renderRoutes(routes)}{" "}
      </Suspense>{" "}
      <PigAndWifeAppFooter />
      <PigAndWifeAppPlayBar />
    </HashRouter>
  );
});
