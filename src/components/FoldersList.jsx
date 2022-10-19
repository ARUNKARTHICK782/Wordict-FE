import React,{Component} from 'react';
import {getFoldersList} from '../apihandlers';
import '../components/RoutesSample/sample.css';
class FoldersList extends Component {
    state = { 
        myfolders : []
    } 

    decideColor = (id) =>{
        const style  = {'pointerEvents':"none"};
        if(this.props.selectedFid === id)
        {
            style['backgroundColor'] = 'red';
        }
        else{
            style['backgroundColor'] = 'white';
        }
        console.log(style);
        return style;
        // return {style};
    };

    async componentDidMount()
    {
        const myfolders = await getFoldersList();
        console.log(myfolders);
        // this.decideColor();
        this.setState({myfolders});
    }
    render() { 
        return (
            <div>
                <div className='folderList w-25'>
                    {this.state.myfolders.map(e =>
                        <div className='folderName' key={e.folder_id.name}>
                            <div className="form-check" onChange={this.props.folderFunc}>
                                <input className="form-check-input" type="radio" name="folders" id={e.folder_id._id} />
                                <label className="form-check-label" for={e.folder_id._id}>
                                  {e.folder_id.name}
                                </label>
                            </div>
                        </div>
                    )}
                    <button className='btn btn-danger p-10 m-2 '>Save</button>
                    {/* <p>Hello</p> */}
                </div>
                {/* <p>Hello</p> */}
            </div>
        );
    }
}
 
export default FoldersList;