import React,{Component} from "react";
import './RoutesSample/sample.css';
class Meaning extends Component {
    state = {  } 
    render() { 
        return (
            <div className="meaningDiv">
                <h4>{this.props.meaning}</h4>
            </div>
        );
    }
}
 
export default Meaning;