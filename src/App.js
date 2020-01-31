import React, { Component } from 'react'
import logo from './logo.svg';
import Header from './component/header'
import Portfolio from './Portfolio'
import Home from './component/home'
import Contact from './component/contact'
import './App.css';
import 'typeface-roboto';

class App extends Component {
  constructor() {
    super()
    this.currentpage = 0
    this.state = {
      main: <Home />
    }
    this.home = this.home.bind(this)
    this.projects = this.projects.bind(this)
    this.contacts = this.contacts.bind(this)
  }

  home() {
    this.currentpage = 0
    this.handlePageChange()
  }

  projects() {
    this.currentpage = 1
    this.handlePageChange()
  }

  contacts() {
    this.currentpage = 2
    this.handlePageChange()
  }



  handlePageChange() {
    let x;
    switch (this.currentpage) {
      case 0:
        x = <Home />;
        break;
      case 1:
        x = <Portfolio />;
        break;
      case 2:
        x = <Contact />;
        break;
    }
    this.setState({ main: x});
  }

  render() {
  return (
    <div className="App">
    <Header home={this.home} projects={this.projects} contacts={this.contacts} />
    {this.state.main}
    </div>
  )
}
}


export default App;
