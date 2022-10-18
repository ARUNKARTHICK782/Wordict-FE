import React,{Component} from "react";
import Joi from 'joi-browser';
import axios from "axios";
class Signup extends Component {
    state = { 
        account : {
            name : "",
            username : "",
            password : ""
        }
     } 
     schema = {
        name : Joi.string().required(),
        username : Joi.string().required(),
        password : Joi.string().required()
    }

    apiEndpoint = 'https://wordictserver.herokuapp.com/';


    validateFunction = () =>{
        const options = {abortEarly : false};
        const {error} = Joi.validate(this.state.account,this.schema,options);
        // console.log(joiValidation);
        return error;
    }

    handleChange  = e =>{
        const account = this.state.account;
        account[e.currentTarget.name] =  e.currentTarget.value;
        // console.log(account);
        this.setState({account})
    }

    signupEvent = async e =>{
        const {account} = this.state;
        e.preventDefault();
        const error = this.validateFunction();
        if(error)
            alert("Some field are missing");
        const payload = {
            name : account.name,
            email_id:account.username,
            password : account.password
        }
        const res = await axios.post(this.apiEndpoint+'api/auth/signup',payload);
        console.log(res);
    }

    render() { 
        const {account} = this.state;
        return (
            <div>
                <form onSubmit={this.signupEvent}>
                    <div className="form-floating mb-3">
                        <input type="text" name="name" value={account.name} onChange={this.handleChange} className="form-control" id="floatingInput" placeholder="Name"/>
                        <label>Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" name="username" value={account.username} onChange={this.handleChange} className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label>Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" name="password" value={account.password} onChange={this.handleChange} className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label >Password</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </div>
        );
    }
}
 
export default Signup;