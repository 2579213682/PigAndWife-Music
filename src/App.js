import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import PigAndWifeMain from "./pages/main";

function App() {
  return (
    <Provider store={store}>
      <PigAndWifeMain />
    </Provider>
  );
}

export default App;
