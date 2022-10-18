import React,{Component} from "react";

class FolderComponent extends Component {
    render() { 
        const {folder_id:folder} = this.props.folder;
        // console.log(folder);
        return (
            <div>
                <h3>{folder.name}</h3>
                <p>{folder.desc}</p>
                <button type="submit" onClick={()=>this.props.navigateFunc(this.props.folder)}>Show Words</button>
            </div>
        );
    }
}
 
export default FolderComponent;