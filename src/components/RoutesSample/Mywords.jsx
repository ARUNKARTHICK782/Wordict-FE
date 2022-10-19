import axios from "axios";
import React,{Component} from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
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
        Aos.init({duration:2000});
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
                {(this.state.loading)?<div className="loader"></div>:this.state.mywords.map(e=><div data-aos="fade-up">
                    <WordComponent myword={e}/>
                </div>)}
            </div>
        );
    }
}
 
export default Mywords;