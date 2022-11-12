import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 } from "uuid";
import api from "../api/persons";
import "./App.css";
import Header from "./Header";
import AddPerson from "./AddPerson";
import PersonList from "./PersonList";
import EditPerson from "./EditPerson";
import PairsList from "./PairsList";

function App() {
  const [persons, setPersons] = useState([]);
  const [receivers, setReceivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const retrievePersons = async () => {
    const response = await api.get("/persons");
    return response.data;
  };

  const addPersonHandler = async (person) => {
    console.log(person);
    const request = {
      id: v4(),
      ...person,
    };

    const response = await api.post("/persons", request);
    console.log(response);
    setPersons([...persons, response.data]);
  };

  const updatePersonHandler = async (person) => {
    const response = await api.put(`/persons/${person.id}`, person);
    const { id, name, receiver } = response.data;
    setPersons(
      persons.map((person) => {
        return person.id === id ? { ...response.data } : person;
      })
    );
  };

  const removePersonHandler = async (id) => {
    await api.delete(`/persons/${id}`);
    const newPersonList = persons.filter((person) => {
      return person.id !== id;
    });

    setPersons(newPersonList);
  };

  useEffect(() => {
    const getAllPersons = async () => {
      const allPersons = await retrievePersons();
      // if (allPersons) setPersons(allPersons);
      if (allPersons) {
        setPersons(allPersons);
        setReceivers (allPersons)
      }
    };

    getAllPersons();
  }, []);
  

  return (
    <div className="ui container">
        <Header />
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <PersonList
                {...props}
                persons={searchTerm.length < 1 ? persons : searchResults}
                getPersonId={removePersonHandler}
                term={searchTerm}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddPerson {...props} addPersonHandler={addPersonHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditPerson
                {...props}
                updatePersonHandler={updatePersonHandler}
              />
            )}
          />
          <Route
            path="/pairs"
            render={() => (
              <PairsList
                persons={persons}
                receivers={receivers}
              />
            )}
          />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
