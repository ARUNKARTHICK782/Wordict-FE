import React,{Component} from "react";
import '../components/RoutesSample/sample.css';
class WordComponent extends Component {
    state = {  
        meanings : this.props.myword.word_id.meanings
    } 
    render() { 
        const {myword} = this.props;
        return (
            <div className="wordDiv">
                <h3>{this.props.myword.word_id.word}</h3>
                <ul>{this.state.meanings.map(e=>
                <div><li>{e}</li><br></br></div>
                )}</ul>
                <p>Added on {myword.createdAt.toString().substring(0,10)}</p>
            </div>
        );
    }
}
 
export default WordComponent;