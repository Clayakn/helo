import React, { Component } from 'react';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
import Post from './components/Post/Post';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
      <Auth />
      <Nav /> 
      <Dashboard />
      <Form /> 
      <Post />
      </div>
    );
  }
}

export default App;
