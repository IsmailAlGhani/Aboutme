import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Activity from './components/activity/activity';
import Footer from './components/footer/footer';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Activity resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
