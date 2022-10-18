import axios from "axios";
import React,{Component} from "react";
import {getToken} from '../../apihandlers';
import apiEP from '../../common/credentials';
import FolderComponent from "../FolderComponent";
import '../RoutesSample/sample.css';

class MyFolders extends Component {
    state = { 
        myfolders : []
    } 

    async componentDidMount()
    {
        const token = await getToken();
        await axios({
            method:'get',
            url:apiEP+'api/users/myfolders',
            headers:{'x-auth-token':token}
        }).then((res)=>{
            // console.log(res.data);
            this.setState({myfolders:res.data});
        });
    }

    navigateToFolder = (folder_id) =>{
        // window.location.href = "/myfolders"+folder_id;
        console.log(folder_id);
    }

    render() { 
        return (
            <div className="c-grid-container">
                <h3>My Folders</h3>
                {this.state.myfolders.map(e=><div className="c-grid-item"><FolderComponent folder={e} navigateFunc={this.navigateToFolder}/></div>)}
            </div>
        );
    }
}
 
export default MyFolders;