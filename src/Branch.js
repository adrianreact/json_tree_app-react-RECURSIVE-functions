import React, { useState } from "react";

const Branch = ({ name, children, buttonType, parentRadioActive, active }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [radioActive, setRadioActive] = useState(null);

  const expandBranch = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);

    if (parentRadioActive) parentRadioActive();
  };

  const renderBranchesFromChildren = () => {
    if (children) {
      return children.map(({ name, children, buttonType }, index) => {
        return (
          <Branch
            key={name}
            name={name}
            children={children}
            buttonType={buttonType}
            active={radioActive === index}
            parentRadioActive={() => {
              setRadioActive(radioActive !== index && index);
            }}
          />
        );
      });
    }
  };

  return (
    <div className="branch">
      <div onClick={expandBranch} className="title">
        {name}
        {children && <>{buttonType === "checkbox" ? " [+]" : " (+)"}</>}
      </div>

      {buttonType === "radio" && active && renderBranchesFromChildren()}
      {buttonType === "checkbox" && isOpen && renderBranchesFromChildren()}
    </div>
  );
};

export default Branch;
