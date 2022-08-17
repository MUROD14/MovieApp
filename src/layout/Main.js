import React from 'react';
import Loader from '../components/Loader';
import Movies from '../components/Movies';
import Search from '../components/Search';

export default class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }
    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=811d40cd&s=Mario&page=1")
         .then(response => response.json())
         .then((data) => {this.setState({movies: data.Search,  loading: false})})
    }
    seachMovies = (str, type = "all") => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=811d40cd&s=${str}${type !== "all" ? `&type=${type}`: ""}`)
             .then(response => response.json())
             .then((data) => {this.setState({movies: data.Search, loading: false})})
    }
    render() {
        return(
            <div className='container content'>
                <Search seachMovies={this.seachMovies}/>
                {this.state.loading ? <Loader /> : <Movies movies={this.state.movies} />}
            </div>
        )
    }
} 