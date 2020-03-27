import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../Context";
class Contacts extends Component {
  DeletContact = id => {
    //console.log(id);
    const { ccontacts } = this.state;
    //console.table(ccontacts);
    const newcontacts = ccontacts.filter(con => con.id !== id);
    //console.table(newcontacts);
    this.setState({ ccontacts: newcontacts });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { ccontacts } = value;
          return (
            <React.Fragment>
              <div className="display-4">
                <span className="text-danger"> Contact</span> List
              </div>
              {ccontacts.map(constact => (
                <Contact
                  key={constact.id}
                  id={constact.id}
                  name={constact.name}
                  phone={constact.Phone}
                  Email={constact.Email}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
