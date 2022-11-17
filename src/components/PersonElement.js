import React from "react";
import { Link } from "react-router-dom";

const PersonElement = (props) => {
  const { id, name, receiver } = props.person;
  console.log("personElment", id, name, receiver)
  return (
    <div className="item">
      <div className="content">
        {/* <Link
          to={{ pathname: `/persons/${id}`, state: { person: props.person } }}
        > */}
          <div className="header">{name}</div>
          <div>{receiver}</div>
        {/* </Link> */}
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      {/* <Link to={{ pathname: `/edit`, state: { person: props.person } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link> */}
      <Link to={`/edit`} state={{ person: props.person} } >
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default PersonElement;
