import axios from "axios";
import React,{Component} from "react";
import {getToken,getFoldersList} from '../../apihandlers';
import apiEP from '../../common/credentials';
import FolderComponent from "../FolderComponent";
import '../RoutesSample/sample.css';

class MyFolders extends Component {
    state = { 
        myfolders : [],
    } 

    async componentDidMount()
    {
        const myfolders = await getFoldersList();
        this.setState({myfolders});
    }

    navigateToFolder = (folder_id) =>{
        // window.location.href = "/myfolders"+folder_id;
        console.log(folder_id);
    }

   

    render() { 
        return (
            <div>
            <h3>My Folders</h3>
            <div className="c-grid-container">
                {this.state.myfolders.map(e=><div className="c-grid-item"><FolderComponent folder={e} navigateFunc={this.navigateToFolder}/></div>)}
            </div>
            </div>
        );
    }
}
 
export default MyFolders;