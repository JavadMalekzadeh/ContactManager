import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showcontactinfo: false
  };

  static defaultProps = {
    name: "---",
    phone: "---",
    email: "---"
  };

  onShowClick = () => {
    //console.log(this.state);
    this.setState({ showcontactinfo: !this.state.showcontactinfo });
  };
  onDeletClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, phone, Email } = this.props;
    const Ishowinfo = this.state.showcontactinfo;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  style={{ cursor: "pointer" }}
                  onClick={this.onShowClick}
                  className="fa fa-sort-down"
                ></i>
                <i
                  className="fa fa-times"
                  style={{ color: "red", cursor: "pointer", float: "right" }}
                  onClick={this.onDeletClick.bind(this, id, dispatch)}
                ></i>
                <Link to={`/Contact/Edit/${id}`}>
                  <i
                    className="fa fa-edit"
                    style={{
                      cursor: "pointer",
                      color: "black",
                      float: "right",
                      marginRight: "5px"
                    }}
                  ></i>
                </Link>
              </h4>
              {Ishowinfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{phone}</li>
                  <li className="list-group-item">{Email}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  Email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
export default Contact;
