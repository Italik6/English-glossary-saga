import React from "react";

export default props => {
  return (
    <div className="m-t-2">
      <h5>Definitions:</h5>
      <ul className="list-group">
        {props.items.map(item => (
          <li className="list-group-item" key={item.definition}>
            - {item.definition}
          </li>
        ))}
      </ul>
    </div>
  );
};
