import React from "react";

export default props => {
  return (
    <button className="btn btn-success m-t-2" onClick={props.onClick}>
      {props.title}
    </button>
  );
};
