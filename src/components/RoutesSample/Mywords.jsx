import axios from "axios";
import React,{Component} from "react";
import apiEP from '../../common/credentials';
import WordComponent from "../WordComponent";
import '../RoutesSample/sample.css';
class Mywords extends Component {
    state = { 
        mywords : [],
        loading : true
     } 
    async componentDidMount()
    {
        const token = localStorage.getItem('token');
        let mywords;
        await axios({
            method: 'get',
            url: apiEP+'api/users/mywords',
            headers: {'x-auth-token': token},
          }).then(function(res){
                mywords = res.data;
                console.log(res.data);
            });
        this.setState({mywords:mywords,loading:false});
        
    }
    render() { 
        return (
            <div>
                {(this.state.loading)?<div className="loader"></div>:this.state.mywords.map(e=><WordComponent myword={e}/>)}
            </div>
        );
    }
}
 
export default Mywords;