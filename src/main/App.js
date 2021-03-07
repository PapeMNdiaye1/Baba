import './style/style.css';
import React, { Component, Fragment } from "react"
import { Link, Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import Acceuil from "./Acceuil"
import Biographie from "./Biographie"
import Tableaux from "./Tableaux"
import Atelier from "./Atelier"


class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Redirect to={"/Acceuil"} />
          <header >
            <nav className="navigation">
              <ul>

                <li>
                  <Link to="/Acceuil">Acceuil</Link>
                </li>

                <li>
                  <Link to="/Biographie">Biographie</Link>
                </li>

                <li>
                  <Link to="/Tableaux">Tableaux</Link>
                </li>

                <li>
                  <Link to="/Atelier">Atelier</Link>
                  
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route
              exact
              path={"/Acceuil"}
              render={(props) => (
                <Acceuil
                  {...props}
                />
              )}
            />
            <Route
              exact
              path={"/Biographie"}
              render={(props) => (
                <Biographie
                  {...props}
                />
              )}
            />
            <Route
              exact
              path={"/Tableaux"}
              render={(props) => (
                <Tableaux
                  {...props}
                />
              )}
            />
            <Route
              exact
              path={"/Atelier"}
              render={(props) => (
                <Atelier
                  {...props}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }
}










export default App;
