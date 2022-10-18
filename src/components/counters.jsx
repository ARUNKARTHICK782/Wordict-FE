import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        return (
        <div>
            <button type='button' className='btn btn-primary m-2' onClick={this.props.onReset}>Reset</button>
            {this.props.counters.map(c =>
                <Counter key={c.id} counter={c} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement}/>    
            )}
        </div>);
    }
}
 
export default Counters;