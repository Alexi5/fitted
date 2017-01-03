import React, {Component} from 'react';
import {connect} from 'react-redux'
import store from '../store.js';

import NewPost from '../components/NewPost'
import {addPhotoToList} from '../action-creators/list'

class AddPhotoContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            photoId: ''
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            photoId: event.target.value,
        })
    }

    //broken
    handleSubmit(event){
        event.preventDefault();

        const listId = this.state.list.singleList.id;
        store.dispatch(addPhotoToList(listId, this.state.photoId))

        //reset the state
        this.setState({postTitle: '', postContent: '', dirty: false})
    }

    render(){
        const listPhotos = this.state.listPhotos;
        let warning = '';

        // warning if no photo chosen
        // if( (!title || !all) && dirty) {
        //     warning = 'please fill in blank field'
        // }
        return (
            <AddPhoto
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                listPhotos={listPhotos}  />
        )
    }
}