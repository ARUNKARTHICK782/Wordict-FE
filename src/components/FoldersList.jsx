import React,{Component} from 'react';
import {getFoldersList} from '../apihandlers';
import '../components/RoutesSample/sample.css';
class FoldersList extends Component {
    render() { 
        const {currentActiveFolder,folderFunc,onsubmit,myfolders,showSaveBtn} = this.props;
        return (
            <div>
                    <ul className="list-group" onClick={folderFunc}>
                    {myfolders.map(e =>
                            <li className={currentActiveFolder == e.folder_id._id?"list-group-item active pe-auto":"list-group-item pe-auto"}  id={e.folder_id._id} key={e.folder_id._id}>
                                {e.folder_id.name}
                            </li>
                    )}
                    </ul>
                   {(showSaveBtn === true)?<button className='btn btn-danger p-10 m-2 ' onClick={onsubmit}>Save</button>:null}
                    {/* <p>Hello</p> */}
                {/* <p>Hello</p> */}
            </div>
        );
    }
}
 
export default FoldersList;



// <div className='folderName' key={e.folder_id.name}>
//                             <div className="form-check" onChange={this.props.folderFunc}>
//                                 <input className="form-check-input" type="radio" name="folders" id={e.folder_id._id} />
//                                 <label className="form-check-label" for={e.folder_id._id}>
//                                   {e.folder_id.name}
//                                 </label>
//                             </div>
//                         </div>