import React from "react";
import classnames from "classnames";

interface Link {
  active: any;
  children: any;
  setFilter: any;
}

const Link = (props: Link) => {
  const { active, children, setFilter } = props;
  return (
    <a
      className={classnames({ selected: active })}
      style={{ cursor: "pointer" }}
      onClick={() => setFilter()}
    >
      {children}
    </a>
  );
};

export default Link;
