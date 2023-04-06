import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/App.css';
import './css/grails.css';
import './css/main.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  Create  from './components/Create';
import  Edit  from './components/Edit';
import  Show  from './components/Show';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route exact path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
      </div>
  </Router>,

  // <App />,
  document.getElementById('root')
);
