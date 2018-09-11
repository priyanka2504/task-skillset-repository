import React, { Component } from 'react';
import UserForm from './form';
import Table from './table';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
render() {
return (
<div>
  <div>
    <h2 className="text-info"> Skillset Repository </h2>
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Form</Link>
        </li>
        <li>
          <Link to="/table">Table</Link>
        </li>
      </ul>

      <hr />
      <Route exact path="/" component={UserForm} />
      <Route path="/table" component={Table} />
    </div>
  </Router>
    </div>

</div>
);
}
}
export default App;