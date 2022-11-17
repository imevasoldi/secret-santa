import React from "react";
import { Link, useLocation } from "react-router-dom";
import PersonElement from "./PersonElement";
// import user from "../images/user.jpg";

const PersonDetail = (props) => {
  // const { name, category } = props.location.state.person;
  let location = useLocation()
  console.log("perElementLoc", location)
  const { name, category } = location.state;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          {/* <img src={user} alt="user" /> */}
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{category}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Book List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PersonDetail;
