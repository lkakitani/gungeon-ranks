import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Home, ItemRanks, GunRanks, Changes } from './pages';

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <Router>
          <div className="ui inverted segment">
            <div className="ui inverted secondary menu">
              <NavLink to="/" className="item" activeClassName="active" exact>
                Home
              </NavLink>
              <div className="ui pointing dropdown link item">
                <span className="text">Ranks</span>
                <i className="dropdown icon"></i>
                <div className="menu">
                  <NavLink to="/ranks/items" className="item" activeClassName="active" exact>
                    Item Ranks
                  </NavLink>
                  <NavLink to="/ranks/guns" className="item" activeClassName="active" exact>
                    Gun Ranks
                  </NavLink>
                </div>
              </div>
              <NavLink to="/changes" className="item" activeClassName="active" exact>
                News
              </NavLink>
            </div>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/ranks/items" component={ItemRanks} />
          <Route path="/ranks/guns" component={GunRanks} />
          <Route path="/changes/" component={Changes} />
        </Router>
      </div>

    );
  }

}

export default App;
