import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPerson (props) {
  let navigate = useNavigate()
  const [state, setState] = useState({
    name: "",
    receiver: "",
  })

  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.receiver === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    props.addPersonHandler(state);
    setState({ name: "", receiver: "" });
    // this.props.history.push("/");
    navigate("/");
  };
  return (
    <div className="ui main">
      <h2>Add Person</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>category</label>
          <input
            type="text"
            name="receiver"
            placeholder="receiver"
            value={state.receiver}
            onChange={(e) => setState({...state,  receiver: e.target.value })}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}

export default AddPerson;
