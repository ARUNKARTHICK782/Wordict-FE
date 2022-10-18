import axios from "axios";
import React,{Component} from "react";
import Input from "../common/Input";
import '../components/RoutesSample/sample.css';
import apiEP from "../common/credentials";
class NewFolder extends Component {
    state = {  
        folder : {
            folder_name : "",
            folder_desc : ""
        }
    } 

    handleChange = (e) =>{
        const folder = this.state.folder;
        folder[e.currentTarget.name] = e.currentTarget.value;
        this.setState({folder});
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const folder = {
            name : this.state.folder.folder_name,
            desc : this.state.folder.folder_desc
        }
        const token =  localStorage.getItem('token');
        await axios({
            method:'post',
            url:apiEP+'api/folders/new',
            data:folder,
            headers : {
                'x-auth-token': token
            }
        }).then((res)=>{
            // console.log(res.data);
            this.closeModal();
        });
        // console.log(this.state.folder);
    }

    closeModal = () =>
    {
        document.getElementById('myModal').style.display = "none";
        this.props.onclick();
    }

    render() { 
        return (
            <div>
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={this.closeModal}>&times;</span>
                        <form onSubmit={this.handleSubmit}>
                            <Input name="folder_name" type="text" value={this.state.folder.folder_name} onchange={this.handleChange} label="Folder Name"/>
                            <Input name="folder_desc" type="text" value={this.state.folder.folder_desc} onchange={this.handleChange} label="Folder Description"/>
                            <button type="submit" className="btn btn-primary">Create Folder</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default NewFolder;