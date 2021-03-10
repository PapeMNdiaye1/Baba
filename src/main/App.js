import './style/style.css';
import React, { Component, Fragment } from "react"
import { Link, Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import Acceuil from "./Acceuil"
import Biographie from "./Biographie"
import Tableaux from "./Tableaux"
import Atelier from "./Atelier"


class App extends Component {
  constructor(props) {
    super(props);

    this.activeNavigation = this.activeNavigation.bind(this)


  }

  async activeNavigation(e) {
    let target = e.target;
    let allLi = await document.querySelectorAll('.navigation ul li a');
    await allLi.forEach(element => {
      if (element != target) {
        element.style.opacity = ".3"
      }
    });

    target.style.opacity = "1"
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Redirect to={"/Acceuil"} />
          <header >
            <nav className="navigation">
              <ul>
                <li className="acceuil-link" onClick={this.activeNavigation}>
                  <Link to="/Acceuil">Acceuil</Link>
                </li>

                <li onClick={this.activeNavigation}>
                  <Link to="/Biographie">Biographie</Link>
                </li>

                <li onClick={this.activeNavigation}>
                  <Link to="/Tableaux">Tableaux</Link>
                </li>

                <li onClick={this.activeNavigation}>
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
