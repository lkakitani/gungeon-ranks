import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Home, Ranks, Changes } from './pages';


class App extends React.Component {

  render() {
    return (

      <div className="ui container">
        <Router>
          <div className="ui inverted segment">
            <div className="ui inverted secondary menu">
              <NavLink to="/" className="item" activeClassName="active" exact="true">
                Home
              </NavLink>
              <NavLink to="/ranks" className="item" activeClassName="active">
                Ranks
              </NavLink>
              <NavLink to="/changes" className="item" activeClassName="active">
                News
              </NavLink>
            </div>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/ranks/" component={Ranks} />
          <Route path="/changes/" component={Changes} />
        </Router>
      </div>

    );
  }

}

export default App;
