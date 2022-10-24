import React, { Component } from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
class Pagination extends Component { 
    render() { 
        const pagesCount = Math.ceil(this.props.itemCount/this.props.noOfPages);
        const {onPageChange,currentPage} = this.props;
        
        if(pagesCount === 1)
            return null;
        const totPages = this.props.itemCount/this.props.noOfPages;
        const pages = _.range(1,totPages+1);
        return (
            <ul className='pagination'>
                {pages.map(p => <li className={currentPage == p?"page-item active":"page-item"} key={p}><a className="page-link" href="#" onClick={()=>onPageChange(p)}>{p}</a></li> )}
            </ul>
            );
    }
}

Pagination.propTypes = {
    itemCount : propTypes.number.isRequired,
    noOfPages : propTypes.number.isRequired,
    currentPage : propTypes.number.isRequired,
    onPageChange : propTypes.func.isRequired
}
 
export default Pagination;