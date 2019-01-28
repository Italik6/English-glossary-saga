import React from "react";

export default props => {
  return (
    <div>
      <p>Definitions:</p>
      <ul>
        {props.definitions.map(e => (
          <li key={e.definition}>{e.definition}</li>
        ))}
      </ul>
    </div>
  );
};