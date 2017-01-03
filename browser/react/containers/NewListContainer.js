import React from 'react';
import {connect} from 'react-redux'
import store from '../store.js';

import NewList from '../components/NewList'
import {createNewList} from '../action-creators/list'

// map dispatch to props
// function mapStateToProps(state){
//     return {
//         listName: state.lists.newListName,
//         listTags: state.lists.tags
//     }
// }

// //map dispatch to props
// function mapDispatchToProps(dispatch){
//     return {
//         createNewList: function(listName){
//             dispatch(createNewList(listName, listTags));
//         }
//     }
// }

class NewListContiner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listName: '',
            listTags: '',
            dirty: false
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    //handle change
    //store the new value in the state
    handleChange(event){
        this.setState({
            listName:  event.target.value, 
            listTags:  event.target.value,
            dirty: true
        })
    }

    //handle submit
    //call dispatch to call the action with the new state value 
    handleSubmit(event){
        event.preventDefault();
        store.dispatch(createNewList(this.state.listName, this.state.listTags))

        //reset the state
        this.setState({ 
            listName:'',
            listTags: '', 
            dirty: false
        })
    }

    render(){
        //set the input and dirty val for use here
        const name = this.state.listName;
        const tags = this.state.listTags
        const dirty = this.state.dirty;
        const warning ='';

        //implement warning if for invalid entry
        //**************************************
        // let warning = '';
        // if(!name && dirty) {
        //     warning = 'please name you list';
        // }
        
        return(
            <div>
                <NewList 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    name={name} 
                    tags={tags} 
                    warning={warning}/>
            </div>

        )
    }
}

// NewListContiner = connect(mapStateToProps, mapDispatchToProps)(NewListContiner)

export default NewListContiner;

