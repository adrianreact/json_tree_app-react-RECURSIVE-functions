import React from "react";
import data from "./data/data.json";
import Tree from "./Tree";

const App = () => {
  return (
    <div className="App">
      <Tree data={data} />
    </div>
  );
};

export default App;
