import React, { Component } from 'react';
import {searchTags} from '../action-creators/tags'
import store from '../store.js'
import axios from 'axios';
import {Link} from 'react-router';

class SearchForm extends Component{

  constructor(props){
      super(props);
      
      this.state = {
          value: '',
          dirty: false
      }

      this.handleChange=this.handleChange.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
        value: event.target.value,
        dirty: true
    })
  }

  handleSubmit(event){
    event.preventDefault();
    
    store.dispatch(
      searchTags(this.state.value)
    )

    //reset the state
    this.setState({
      input: '',  
      dirty: false
    })
  }

  render(){  
    const handleSubmit = this.handleSubmit.bind(this);
    const handleChange = this.handleChange.bind(this);
    const input = this.state.value;

    return (
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form onSubmit={handleSubmit}>
              <h1>Search</h1>
              <div className="form-group">
                <input 
                  onChange={handleChange} 
                  value={input}
                  className="form-control"
                  placeholder="Enter Tags" />
              </div>
              <button type="submit" className="btn btn-primary">Search</button>
            </form>
          </div>
        </div>
      )
    }
}

export default SearchForm
