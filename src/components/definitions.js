import React from "react";

export default props => {
  return (
    <div className="m-t-2">
      <h4>Definitions:</h4>
      <ul className="list-group">
        {props.definitions.map(e => (
          <li className="list-group-item" key={e.definition}>
            - {e.definition}
          </li>
        ))}
      </ul>
    </div>
  );
};
