import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Ranks, Changes } from './pages';


class App extends React.Component {

  state = { lat: undefined, errorMessage: '' };

  render() {
    return (

      <div className="ui container">
        <Router>
          <div className="ui inverted segment">
            <div className="ui inverted secondary menu">
              <Link to="/" className="item active">
                Home
              </Link>
              <Link to="/ranks" className="item">
                Ranks
              </Link>
              <Link to="/changes" className="item">
                News
              </Link>
            </div>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/ranks/" component={Ranks} />
          <Route path="/changes/" component={Changes} />
        </Router>
      </div>

    );
  }

  componentDidMount() { }

}

export default App;
