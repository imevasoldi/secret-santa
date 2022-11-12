import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

import MatchElement from "./MatchElement"

const PairsList = (props) => {
  props.persons.sort(() => 0.5 - Math.random())
  
  const matches = props.persons.map((person, index) => {
    return {
        ...person,
        santa: person.name,
        gifted: props.persons[2].name
      }
  })

  const renderPairsList = matches.map((match, i) => {
    return (
      <MatchElement
        match={match}
        key={i}
      />
    );
  });
  
  return (
      <div className="main">
      <Header/>
      <h2>
        Pairs List
      </h2>
      <div className="ui celled list">{renderPairsList}</div>
      <Link to="/">
          <button className="ui button blue right">Persons List</button>
      </Link>
    </div>
    )
    
    
}

export default PairsList;