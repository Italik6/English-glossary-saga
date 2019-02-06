import React from "react";

export default props => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.title}
    </button>
  );
};
