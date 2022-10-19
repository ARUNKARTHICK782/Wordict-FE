import React, { Component } from 'react';
import './sample.css';
import {searchWord} from '../../apihandlers';
import Meaning from '../Meaning';
import FoldersList from '../FoldersList';
import Aos from 'aos';
import "aos/dist/aos.css";

class Mainpage extends Component {
    state = { 
        word:"",
        meanings : [],
        selectedFolderId : "",
        showSaveToBtn : false,
        noMeaningFound : false,
     } 

    componentDidUpdate() {
        // document.getElementById("folderListDivId").style.position = 0;
        
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
        console.log(meanings);
        // if(meanings === "No meanings found")
        // {
        //     this.setState({noMeaningFound:true});
        //     return;
        // }
        this.setState({meanings:meanings,showSaveToBtn:true});

        // meanings.map(e=>console.log(e));
    }

    setSelectedFolderId = (e) =>{
        console.log("In setSelectedFolderId");
        console.log(e.target.id);
        // if(e.target.style.backgroundColor === "red")
        //     e.target.style.backgroundColor = "#ffffff";
        // else
        //     e.target.style.backgroundColor = "red";
        // console.log(e.target.innerHTML.innerHTML);    
    }

    showFoldersDiv = () =>{
        Aos.init({duration:2000});
    }

    // leftToRight()
    // {

    //     var id = null;
    //     var elem = document.getElementById('folderListDivId');
    //     clearInterval(id);
    //     id = setInterval(frame, 10);
    //     function frame() 
    //     {
    //         if (pos == 350)
    //         {
    //             clearInterval(id);
    //         } 
    //         else
    //         {
    //             pos++; 
    //             elem.style.top = pos + 'px'; 
    //             elem.style.left = pos + 'px'; 
    //         }
    //     }
    // }

    render() { 
        return (
        <div>
            <div className='searchBoxDiv'>
                <div className="form-floating mb-3">
                    <div className='row'>
                        <div className='col-10'><input type="email" value={this.state.word} onChange={this.listenTextChange} className="form-control"/></div>
                        <div className='col-2'><button type="button" className="btn btn-success" onClick={this.searchWordFunc}>Search</button></div>
                    </div>
                </div>
            </div>
            {(this.state.showSaveToBtn === true)
            ?<div className='row'>
            {(this.state.meanings )
            ?<div className='col-6 outerMeaningDiv'>{this.state.meanings.map(e=><Meaning key={e} meaning = {e}/>)}</div>:null}
                <div data-aos="fade-left" className='col-5'>
                    <div  id="folderListDivId" style={{backgroundColor:"red"}}>
                        <FoldersList  folderFunc={this.setSelectedFolderId} selectedFid={this.state.selectedFolderId}/>
                    </div>
                </div>
            </div>
            :null
            }
            {(this.state.showSaveToBtn === true)
            ?<div className='saveToBtn'>
                <button className="btn btn-primary" onClick={this.showFoldersDiv}>Save to</button>
            </div>:null}
            
        </div>
        );
    }
}
 
export default Mainpage;




