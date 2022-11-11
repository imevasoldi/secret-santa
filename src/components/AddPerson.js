import React from "react";

class AddPerson extends React.Component {
  state = {
    name: "",
    receiver: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.receiver === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addPersonHandler(this.state);
    this.setState({ name: "", receiver: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Person</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>category</label>
            <input
              type="text"
              name="category"
              placeholder="category"
              value={this.state.category}
              onChange={(e) => this.setState({ receiver: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddPerson;
