import React from 'react';
import './App.css';
import Home from './pages/Home'
import SingleRooms from './pages/SingleRooms'
import Error from './pages/Error'
import Rooms from './pages/Rooms'

import {Route, Switch}  from 'react-router-dom'
import Navbar from "./components/Navbar";

function App() {
  return (
      <>
          <Navbar />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/rooms/" exact component={Rooms} />
              <Route path="/rooms/:slug" exact component={SingleRooms} />
              <Route component={Error} />
          </Switch>
      </>
  );
}

export default App;
