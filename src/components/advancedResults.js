import React from "react";

export default props => {
  return (
    <div className="m-t-2">
      <h5>Similar words:</h5>
      <ul className="list-group">
        {props.advancedResults.advancedSearch.map(e => (
          <li className="list-group-item" key={e}>
            - {e}
          </li>
        ))}
      </ul>
    </div>
  );
};
