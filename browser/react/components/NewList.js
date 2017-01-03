import React, {Component} from 'react';
import store from '../store.js'


class NewListForm extends Component {

  constructor(props){
      super(props);

      this.state = {
          listName: '',
          listTags: '',
          dirty: false
      }

      this.handleChange=this.handleChange.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChange(field, event){
    this.setState({
        [field]: event.target.value,
        dirty: true
    })
  }

  handleSubmit(event){
    event.preventDefault();
    
    store.dispatch(
      createNewList(this.state.listName, this.state.listTags)
    )

    //reset the state
    this.setState({
      listName: '', 
      listTags: '', 
      dirty: false
    })
  }


//add warning and fix tag entry
render() {

    const handleSubmit = this.handleSubmit.bind(this);
    const name = this.state.listName;
    const tags = this.state.listTags; 
    const dirty = this.state.dirty;
    const warning = '';
  
    return (
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form className='form-row' 
                  onSubmit={handleSubmit}>
            <h2>New List</h2>
            {/*add warninghere*/}
            <div className='form-group'>
              <label>List Name: </label>
              <br/>
              <input
                name="name"
                value={name}
                onChange={this.handleChange.bind(this, 'listName')}
                type="text"
                placeholder="List Name"
              /> 
            </div>
            <div className='form-group'>
              <label>Tags: </label>
              <br/>
              <input
                name="tags"
                value={tags}
                onChange={this.handleChange.bind(this, 'listTags')}
                type="text"
                placeholder="tags" />
            </div>
              <button 
                type="submit" 
                className="btn btn-primary">
                Save List</button>
          </form>
        </div>
      </div>
    )
  }
};

export default NewListForm;