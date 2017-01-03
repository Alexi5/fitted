import React from 'react';
import store from '../store.js';
import NewPhoto from '../components/NewPhoto'
import {postNewPhoto} from '../action-creators/photo'



class NewPhotoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caption: '',
            tags: '',
            img: {},
            dirty: false
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    //handle change
    //store the new value in the state
    handleChange(event){
        this.setState({
            tags: event.target.value,
            img: event.target.value, 
            dirty: true
        })
    }

    //handle submit
    //call dispatch to 
    //call the action with the new state value 
    handleSubmit(event){
        event.preventDefault();
        store.dispatch(
            postNewPhoto(this.state.img))

        //reset the state
        this.setState({photoCaption: '', 
            caption: '',
            tags: '',
            img: {},
            dirty: false
        })
    }

    render(){
        //set the input and dirty val for use here
        const caption = this.state.caption;
        const photo = this.state.img;
        const tags = this.state.tags;
        const dirty = this.state.dirty;
        let warning ='';

        //implement warning if for invalid entry
        //**************************************
        
        return(
            <div>
                <NewPhoto 
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    caption={caption}
                    tags={tags} 
                    photo={photo}/>
            </div>

        )
    }
}

export default NewPhotoContainer;