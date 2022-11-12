import React from "react";
import { Link } from "react-router-dom";
import PersonElement from "./PersonElement";


const PersonList = (props) => {

  console.log(props);

  const deleteConactHandler = (id) => {
    props.getPersonId(id);
  };

  const renderPersonList = props.persons.map((person) => {
    return (
      <PersonElement
        person={person}
        clickHander={deleteConactHandler}
        key={person.id}
      />
    );
  });

  return (
    <div className="main">
      <h2>
        Person List
        <Link to="/add">
          <button className="ui button blue right">Add name</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderPersonList}</div>
      {props.persons.length >= 2 && <Link to="/pairs">
          <button className="ui button blue right">Sort Pairs</button>
        </Link>}
    </div>
  );
};

export default PersonList;
