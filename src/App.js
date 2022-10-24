import './App.css';
import Counters from './components/counters';
import Movies from './components/movies';
import NavBar from './components/navbar';
import React, { Component } from 'react';
import Homepage from './components/homepage';

import Login from './components/RoutesSample/login';
import Mainpage from './components/RoutesSample/main';
import Folder from './components/RoutesSample/folder';
import './components/RoutesSample/sample.css';

import { Route,Routes } from 'react-router-dom';
import Signup from './components/RoutesSample/signup';
import NotFound from './components/RoutesSample/NotFound';
import Mywords from './components/RoutesSample/Mywords';
import MyFolders from './components/RoutesSample/MyFolders';
import WordsInFolder from './components/RoutesSample/WordsInFolder';

class App extends Component {
  state = { 
    counters : [
        {id:0,value:0},
        {id:1,value:0},
        {id:2,value:0}, 
        {id:3,value:0}
    ]
  } 

  handleIncrement = (counter) =>{
      const tc = [...this.state.counters];
      const index = tc.indexOf(counter);
      tc[index] = {...counter};
      tc[index].value++;
      this.setState({counters:tc});
  }

  handleDecrement = (counter) =>{
    const tc = [...this.state.counters];
    const ind = tc.indexOf(counter);
    tc[ind] = {...counter};
    tc[ind].value = (tc[ind].value <= 0)?0:tc[ind].value-1;
    this.setState({counters:tc});
  }

  handleReset = () =>{
      const counter = [];
      this.state.counters.forEach(e=>counter.push({id:e.id,value:0}));
      this.setState({counters:counter});
  }

  handleDelete = (cid)=>{
      const tempCounters = this.state.counters.filter(c => c.id !== cid);
      this.setState({counters:tempCounters});
    }
    
    render() { 
      return (
        // <main className="form-signin w-100 m-auto">
        // <div className='container'>
        // <div className='child'>
        <div> 
              <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path = "signup" element={<Signup/>}/>
                <Route path="main" element={<Mainpage/>}/>
                <Route path="mywords" element={<Mywords/>}/>
                <Route path ="myfolders" element={<MyFolders/>}/>
                <Route path ="myfolders/:id" element={<WordsInFolder />}/>
                <Route path="*"  element={<NotFound/>}/>
                {/* <Route path="/folder/:id" element={<Folder/>}/> */}
              </Routes>
          </div>
          // </div>
        // </div>
        // </main>
        );
      }
    }
    
    export default App;
    
    // {/* <NavBar counters={this.state.counters.filter(c => c.value>0).length}/> */}