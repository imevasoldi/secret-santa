import React from "react";

const MatchElement = (props) => {
  const { santa, gifted } = props.match;
  return (
    <div className="item">
      <div className="content">
        <div className="header">{santa} is given to {gifted}</div>
      </div>
    </div>
  );
};

export default MatchElement;
