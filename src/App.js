import React from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./Context";
import Addcontact from "./components/contacts/AddContact";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFoundPage";
import Editcontact from "./components/contacts/EditContact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Contact/Add" component={Addcontact} />
              <Route exact path="/Contact/Edit/:id" component={Editcontact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
