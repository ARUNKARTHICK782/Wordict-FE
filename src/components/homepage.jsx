import React, { Component } from 'react';
import Pagination from '../common/pagination';
import Movies from './movies';
import {Link} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';



class Homepage extends Component {
    render() { 
        return (<div>
            
            {/* <Movies/> */}
            <Pagination itemCount={9} noOfPages={3}/>
        </div>);
    }
}
 
export default Homepage;