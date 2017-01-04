import React from 'react';
import {connect} from 'react-redux'
import store from '../store.js';

import SearchForm from '../components/Search'
import Lists from '../components/Lists'
import Photos from '../components/Photos'

import {searchTags} from '../action-creators/tags'

function mapStateToProps(state){
    console.log('state: ', state)
    return {
        lists: state.lists.tags,
        photos: state.lists.tag,
        tags: state.tags
    }
}

function mapDipsatchToProps(dipatch){
    return {}
}

class SearchFormContainer extends React.Component {

    constructor(props) {
        super();

        this.state = {
            input: '',
        }

        this.handleChange=this.handleChange.bind(this)
    }

    //handle change
    //store the new value in the state
    handleChange(event){
        this.setState({
            input: this.state.input, 
        })
    }

    //handle submit
    //call dispatch to call the action with the new state value 
    handleSubmit(event){
        event.preventDefault();
        store.dispatch(searchTags(this.state.input))

        //reset the state
        this.setState({ 
            input:'',
        })
    }

    render(){
        //set the input and dirty val for use here
        const input = this.state.input
        const photos = this.props.photos
        const lists = this.props.lists
        const warning ='';

        //implement warning if for invalid entry
        //**************************************
        // let warning = '';
        // if(!name && dirty) {
        //     warning = 'please name you list';
        // }
        
        return(
            <div>
                <SearchForm 
                    {...this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    value={input} 
                    warning={warning}/>
                {/*<Lists lists={lists}/>
                <Photos photos={photos}/>*/}
            </div>

        )
    }
}

// SearchFormContainer = connect(mapStateToProps, mapDispatchToProps)(SearchFormContainer)

export default SearchFormContainer;

