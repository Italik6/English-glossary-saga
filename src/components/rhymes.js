import React from "react";

export default props => {
  return (
    <div className="m-t-2">
      <h5>Rhymes:</h5>
      <ul className="list-group">
        {props.rhymes.map(rhyme => (
          <li className="list-group-item" key={rhyme}>
            - {rhyme}
          </li>
        ))}
      </ul>
    </div>
  );
};
