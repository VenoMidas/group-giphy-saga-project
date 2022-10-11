import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Search from '../Search/Search';
import Favorite from '../Favorite/Favorite';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Home/Search Page */}
        <Route path="/" exact>
          <Search />
        </Route>
        {/* Favorites Page */}
        <Route path="/favorite" exact>
          <Favorite />
        </Route>
      </Router>
    </div>
  );
}

export default App;
