// App.js

import React from "react";
import DataComponent from "./components/DataComponent";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <div className="flex w-full">
        <div>
          <DataComponent />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </>
  );
};

export default App;
