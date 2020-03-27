import React, { Component } from "react";
import { Consumer } from "../../Context";
import { v4 as uuidv4 } from "uuid";
import TextInputGroups from "../layout/TextInputGroup";
import axios from "axios";
class AddContact extends Component {
  state = {
    name: "",
    Email: "",
    phone: "",
    error: {}
  };
  onchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onsubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, Email, phone, error } = this.state;
    if (name === "") {
      this.setState({ error: { name: "Name is required" } });
      return;
    }
    if (Email === "") {
      this.setState({ error: { Email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ error: { phone: "Phone number is required" } });
      return;
    }
    const newcontact = {
      name,
      Email,
      Phone: phone
    };
    console.log(newcontact);
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newcontact
    );
    dispatch({ type: "ADD_CONTACT", payload: response.data });

    this.setState({ name: "", Email: "", Phone: "", error: {} });

    this.props.history.push("/");
  };
  render() {
    const { name, Email, phone, error } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onsubmit.bind(this, dispatch)}>
                  <TextInputGroups
                    label="Name:"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="pleace enter name ..."
                    value={name}
                    onChange={this.onchange}
                    error={error.name}
                  />
                  <TextInputGroups
                    label="E-Mail:"
                    type="text"
                    name="Email"
                    id="Email"
                    placeholder="pleace enter E-Mail ..."
                    value={Email}
                    onChange={this.onchange}
                    error={error.Email}
                  />
                  <TextInputGroups
                    label="phone:"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="pleace enter phone ..."
                    value={phone}
                    onChange={this.onchange}
                    error={error.phone}
                  />

                  <input
                    type="submit"
                    className="btn btn-success btn-block"
                    value="Add Contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
