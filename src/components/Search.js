import React from "react";

export default class Search extends React.Component {
    state = {
        search: "mario",
        type: 'all'
    }
    hanleKey = (e) => {
        if(e.key === "Enter") {
            this.props.seachMovies(this.state.search, this.state.type)
        }
    }
    hanleFilter = (e) => {
        this.setState(()=>({type: e.target.dataset.type}), ()=> {
            this.props.seachMovies(this.state.search, this.state.type)
        });
    }
    searchBtn = () => {
        this.props.seachMovies(this.state.search, this.state.type)
    }
    render() {
        return(
            <div className="row">  
              <div className="col s12">
                <div className="input-field">
                    <input
                      type="search"
                      className="validate" 
                      placeholder="Search"
                      value={this.state.search}
                      onChange={ (e) => this.setState({search: e.target.value})}
                      onKeyDown={this.hanleKey} />
                     <button onClick={this.searchBtn} class="btn search-btn">Search
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div> 
            {/* Filtered */}
                  <label>
                      <input 
                      name="type"
                      type="radio"
                      datatype="all"
                      onChange={this.hanleFilter}
                      checked={this.state.type === "all"} 
                      className="with-gap" />
                      <span>All</span>
                  </label>

                <label>
                  <input 
                      name="type"
                      type="radio"
                      datatype="movie"
                      onChange={this.hanleFilter}
                      checked={this.state.type === "movie"} 
                      className="with-gap" />
                      <span>Movie Only</span> 
                </label>

                   <label>
                    <input
                      name="type"
                      type="radio"
                      datatype="series"
                      onChange={this.hanleFilter}
                      checked={this.state.type === "series"} 
                      className="with-gap" />
                      <span>Series Only</span>
                </label>

                <label>
                <input
                      name="type"
                      type="radio"
                      datatype="game"
                      onChange={this.hanleFilter}
                      checked={this.state.type === "game"} 
                      className="with-gap" />
                      <span>Game Only</span>
                </label>
        </div>
        )
    }
}