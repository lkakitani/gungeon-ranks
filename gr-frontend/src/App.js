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

        <div className="ui padded vertical footer segment">
          © 2019 <a href="mailto:leonardo.kakitani@gmail.com">Leonardo Kakitani</a>.
          This is an independent site not run by or associated with Dodge Roll games. All sprites and artworks are properties of <a href="https://dodgeroll.com/gungeon/" target="_blank" rel="noopener noreferrer">Dodge Roll</a> and <a href="https://www.devolverdigital.com/" target="_blank" rel="noopener noreferrer">Devolver Digital</a>.
        </div>
      </div>
    );
  }

}

export default App;
