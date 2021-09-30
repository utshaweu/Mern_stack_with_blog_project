import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <NavBar/>
      <div className="max-w-screen-md mx-auto pt-20">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/articles-list" component={ArticlesList}></Route>
          <Route exact path="/article/:name" component={Article}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
