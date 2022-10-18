import React, { Component } from 'react';

class Counter extends Component {
    // btnStyle={
    //     backgroundColor:(this.state.count === 0)?"red":"green",
    // }
    // arun = {
    //     fontSize:20,
    //     paddingLeft:20
    // }


    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }


    render() { 
        return (
        <div>
            <span>{this.formatCount()}</span>
            <button type='button' className='btn btn-success m-2' onClick={()=>this.props.onIncrement(this.props.counter)}>Increment</button>
            <button 
                className='btn btn-secondary m-2' 
                type='button' 
                onClick={()=>this.props.onDecrement(this.props.counter)}
                disabled = {this.props.counter.value === 0 ? 'disable': ''}
            >Decrement</button>
            <button className='btn btn-danger' type='button' onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
        </div>
        );
    }
    
    formatCount(){
        return this.props.counter.value === 0 ? "Zero" :this.props.counter.value;
    }
}
 
export default Counter;