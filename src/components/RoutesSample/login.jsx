import React, { Component } from 'react';
import {Routes,Route,useNavigate, Link} from 'react-router-dom';
import Joi from 'joi-browser';
import Input from '../../common/Input';
import axios from 'axios';
import './sample.css';
import ap from '../../common/credentials';
import userPayloadFormatter from '../../common/userPayloadFormatter';
import NavBar from '../navbar';
class Login extends Component {
    
    state = {
        account : {username : "",password:""},
        errors : {}
    }

    // navigate = useNavigate();

    schema = {
        username : Joi.string().required(),
        password : Joi.string().required()
    }


    
    validateFunction = () =>{
        const options = {abortEarly : false};
        const {error} = Joi.validate(this.state.account,this.schema,options);
        // console.log(joiValidation);
        const errors = {}
        if(!error)
        {
            return null;
        }
        for(let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;
    }

    // navigateHome = () => {
    //     navigate('/');
    // };
    handleEvent = async e =>{
        e.preventDefault();
        const errors = this.validateFunction();
        if(errors)
        {
            this.setState({errors : errors || {}});
            // console.log(errors);
            return;
        }
        this.setState({errors : errors || {}});
        // console.log(this.state.account);
        const formattedUser = userPayloadFormatter(this.state.account,2);
        const res = await axios.post(ap+"api/auth/login",formattedUser);
        localStorage.setItem('token',res.data);
        window.location.href = '/main';
        // this.navigateHome();
        console.log(res.data);
    }

    handleChange  = e =>{
        const account = this.state.account;
        account[e.currentTarget.name] =  e.currentTarget.value;
        // console.log(account);
        this.setState({account})
    }
    render() { 
        console.log("hello!!!");
      return (
        <div>
            <NavBar/>
            <div className="row">
                {/* <div className="col">
                </div> */}
                <div className='col'>
                    <form onSubmit={this.handleEvent}>
                        <Input 
                            className="form-floating" 
                            name="username" 
                            label="Email address"  
                            error={this.state.errors.username} 
                            value={this.state.account.username} 
                            type="text" 
                            onchange={this.handleChange}/>
                        {/* <textarea rows="5" cols="50"></textarea> */}
                        <Input className="form-floating" name="password" label="Password" error={this.state.errors.password} value={this.state.account.password} type="password" onchange={this.handleChange} />
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
                {/* <div className="col">
                </div> */}
            </div>
        </div>
        );
    }
}
 
export default Login;