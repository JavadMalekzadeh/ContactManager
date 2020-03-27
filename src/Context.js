import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        ccontacts: state.ccontacts.filter(con => con.id !== action.payload)
      };
    case "ADD_CONTACT":
      return {
        ...state,
        ccontacts: [action.payload, ...state.ccontacts]
      };
    case "UPDATE_CONTACT":
      console.log(state);
      return {
        ...state,
        ccontacts: state.ccontacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    ccontacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  async componentDidMount() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ ccontacts: response.data });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
