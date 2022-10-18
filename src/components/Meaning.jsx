import React,{Component} from "react";
import './RoutesSample/sample.css';
class Meaning extends Component {
    state = {  } 
    render() { 
        return (
            <div className="meaningDiv">
                <h3>{this.props.meaning}</h3>
            </div>
        );
    }
}
 
export default Meaning;