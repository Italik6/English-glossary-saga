import React from "react";

export default props => {
  return (
    <div className="m-t-2">
      <h5>{props.title}</h5>
      <ul className="list-group">
        {props.items.map(item => (
          <li
            className="list-group-item interactive-item"
            key={item}
            onClick={() => props.onClick(item)}
          >
            - {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
