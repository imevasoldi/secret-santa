import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function EditPerson (props) {
  let navigate = useNavigate()
  // const { id, name, reciever } = props.location.state.person;
  const location = useLocation();
  console.log("loc",location)
  const [state, setState] = useState({})
  
  useEffect(()=>{
    const { id, name, receiver } = location.state.person;
    setState({id,
    name,
    receiver,
    })
  },[])

  const update = (e) => {
    e.preventDefault();
    if (state.name === "" || state.receiver === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    props.updatePersonHandler(state);
    setState({ name: "", reciever: "" });
    // this.props.history.push("/");
    navigate("/")
    
  };
  return (
    <div className="ui main">
      <h2>Edit Person</h2>
      <form className="ui form" onSubmit={(e)=>update(e)}>
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
          <label>Relatives</label>
          <input
            type="text"
            name="receiver"
            placeholder="receiver"
            value={state.receiver}
            onChange={(e) => setState({ ...state, receiver: e.target.value })}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
}

export default EditPerson;
