import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route} from 'react-router-dom';
import About from './components/container/About';
import NotFound from './components/container/NotFound';
import Apply from './components/container/Apply'
import MemberDapps from './components/container/MemberDapps'

function Root() {
  console.log(BrowserRouter, Route, About, Root);

  return (
      <BrowserRouter>
        <div>
          {/* test */}
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/apply" component={Apply} />
          <Route exact path ="/memberdapps" component={MemberDapps} />
        </div>
      </BrowserRouter>
          )
          }

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
