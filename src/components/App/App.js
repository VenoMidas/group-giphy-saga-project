import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Favorite from '../Favorite/Favorite';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <br />
        <div>
          {/* Home/Search Page */}
          <Route path="/" exact>
            <Search />
          </Route>
          {/* Favorites Page */}
          <Route path="/favorite" exact>
            <Favorite />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
