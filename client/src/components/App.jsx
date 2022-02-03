import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Foo from './Foo.jsx'
import RSVP from './RSVP.jsx'
import NameSearch from './namesearch.jsx'
import Confirmed from './Confirmed.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NameSearch />} />
          <Route path="/rsvp/:name" element={<RSVP/>} />
          <Route path="confirmed" element={<Confirmed/>} />
          <Route path="/foo" element={<Foo />} />
        </Routes>

      </BrowserRouter>
    );
  }
}


export default App;
