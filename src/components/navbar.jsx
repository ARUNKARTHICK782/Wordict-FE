import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FaFolder } from 'react-icons/fa';
import NewFolder from './NewFolder';
import './RoutesSample/sample.css';

class NavBar extends Component {
    state = {
        showDialog : false
    }

    handleClick = () =>{
        const val = this.state.showDialog;
        this.setState({showDialog:!val});
    }
    render() { 
        return (
            <div>
                <nav className="nav">
                    <a className="nav-logo" href="#">Logo</a>
                    <ul className="nav-list">
                        <li>
                          <a href="#">Dashboard</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                        <li>
                          <a href="#">Feedback</a>
                        </li>
                        <li>
                          <a href="#">Projects</a>
                        </li>
                    </ul>
                </nav>
                {/* <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar {this.props.counters}</a>
                    </div>
                    <div style={{marginRight:"40px"}} onClick={this.handleClick}>
                        <FaFolder/>
                    </div>
                </nav> */}
                {this.state.showDialog && <NewFolder onclick = {this.handleClick}/>}
                {/* <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/main">Main</Link>
                    </li>
                    <li>
                        <Link to="/folder">Folder</Link>
                    </li>
                </ul> */}
            </div>
        );
    }
}
 
export default NavBar;