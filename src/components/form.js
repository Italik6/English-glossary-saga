import React from "react";

export default props => {
  return (
    <form className="input-group" onSubmit={props.onClick}>
      {props.children}
    </form>
  );
};
