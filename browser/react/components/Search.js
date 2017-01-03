import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tags: '',
    }
  }

  handleChange(event) {
    this.setState({
      tags: event.target.value
    })
  }

  handleSubmit(event) {         //fix me
    event.preventDefault();
    axios.get('/api/search', {
      tags: this.state.tags,
    })
    .then(res => {

      let resTags = res.data
      console.log('res: ', res.data)
      console.log('tags: ', this.state.tags)
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h1>Search</h1>
            <div className="form-group">
              <input 
                onChange={this.handleChange.bind(this)} 
                value={this.state.tags}
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
