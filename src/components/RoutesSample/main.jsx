import React, { Component } from 'react';
import './sample.css';
import {searchWord} from '../../apihandlers';
import Meaning from '../Meaning';

class Mainpage extends Component {
    state = { 
        word:"",
        meanings : []
     } 

    componentDidUpdate() {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function(event) {
          window.history.pushState(null, document.title, window.location.href);
        });
    }

    listenTextChange = (e) =>{
        this.setState({word:e.currentTarget.value});
    }

    searchWordFunc = async () =>{
        const meanings = await searchWord(this.state.word);
        this.setState({meanings});
        // meanings.map(e=>console.log(e));
    }
    render() { 
        return (
        <div >
            <div className='searchBoxDiv'>
                <div className="form-floating mb-3">
                    <div className='row'>
                        <div className='col-10'><input type="email" value={this.state.word} onChange={this.listenTextChange} className="form-control"/></div>
                        <div className='col-2'><button type="button" className="btn btn-success" onClick={this.searchWordFunc}>Search</button></div>
                    </div>
                </div>
            </div>
            {(this.state.meanings)?<div className='meaningDiv'>{this.state.meanings.map(e=><Meaning key={e} meaning = {e}/>)}</div>:null}
        </div>
        );
    }
}
 
export default Mainpage;