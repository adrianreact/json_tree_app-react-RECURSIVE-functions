import React from "react";
import Branch from "./Branch";

const Tree = ({ data }) => {
  return (
    <div className="tree">
      {data.map(({ name, children, buttonType }) => {
        return (
          <Branch
            key={name}
            name={name}
            children={children}
            buttonType={buttonType}
          />
        );
      })}
    </div>
  );
};

export default Tree;
