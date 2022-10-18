import React, { Component } from 'react';
import _ from 'lodash';
class Pagination extends Component { 
    render() { 
        const totPages = this.props.itemCount/this.props.noOfPages;
        const pages = _.range(1,totPages+1);
        return (
            <ul className='pagination'>
                {pages.map(p => <li className="page-item"><a className="page-link" href="#">{p}</a></li> )}
            </ul>
            );
    }
}
 
export default Pagination;