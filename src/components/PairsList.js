import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

import MatchElement from "./MatchElement"

const PairsList = (props) => {
  props.persons.sort(() => 0.5 - Math.random())
  
  const matches = props.persons.map((person, index) => {
    let stop = props.persons.length-1
    let pair
    console.log("stops", index, stop, pair)
    
    if (index === stop){
      pair = 0
    }else {
      pair = index+1
    }

    return {
        ...person,
        santa: person.name,
        gifted: props.persons[pair].name
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