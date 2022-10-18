import React, { Component } from 'react';

class Like extends Component {
    render() { 
        return (
            <i className={this.props.liked === true?"fa fa-heart":"fa fa-heart-o"} onClick={()=>this.props.onLikeClicked(this.props.movie)} aria-hidden="false"></i>
        );
    }
}
 
export default Like;