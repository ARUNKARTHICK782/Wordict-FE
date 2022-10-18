import React, { Component } from 'react';

import {getMovies,deleteMovie} from '../services/fakeMovieService';
import 'bootstrap/dist/css/bootstrap.css';
import Like from './like';


class Movies extends Component {
    state = {
        movies : getMovies()
      } 

    deleteMovie = (id) =>{
        console.log(id);
        deleteMovie(id);
        this.setState({movies:getMovies()});
    }
    getMovieCount = ()=>{
        return (this.state.movies.length === 0) ? <p>There are no movies to show</p>: <p>There are {this.state.movies.length} movies</p>;
    }

    handleLike = (movie)=>{
        const mov = this.state.movies;
        const index = mov.indexOf(movie);
        mov[index].liked = !movie.liked;
        this.setState({movies:mov});
    }

    render() { 
        return (<div>
            {this.getMovieCount()}
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                    <th>Movie Name</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.movies.map(e => 
                        <tr  key={e._id}>
                            <td>{e.title}</td>
                            <td>{e.genre.name}</td>
                            <td>{e.numberInStock}</td>
                            <td>{e.dailyRentalRate}</td>
                            <td><Like liked={e.liked} onLikeClicked={this.handleLike} movie={e}/></td>
                            <td><button onClick={()=>{this.deleteMovie(e._id)}}>Delete</button></td>
                        </tr>
                        )}
                </tbody>
            </table>
            {/* <ul>
                {this.state.movies.map(e => <li key={e._id}>{e.title}</li>)}
            </ul> */}
        </div>);
    }
}
 
export default Movies;