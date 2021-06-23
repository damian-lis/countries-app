import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Search from 'pages/Search';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' exact component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
