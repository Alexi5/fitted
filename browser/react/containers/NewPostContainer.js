import React, {Component} from 'react';
import {connect} from 'react-redux'
import store from '../store.js';

import NewPost from '../components/NewPost'
import {createNewPost} from '../action-creators/post'

class NewPostContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            postTitle: '',
            postContent: '',
            dirty: false
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            postTitle: event.target.value,
            postContent: event.target.value,
            dirty: true
        })
    }

    //broken
    handleSubmit(event){
        event.preventDefault();
        store.dispatch(createNewPost(this.state.postTitle, this.state.postContent))

        //reset the state
        this.setState({
            postTitle: '', 
            postContent: '', 
            dirty: false})
    }

    render(){

        const title = this.state.postTitle;
        const content = this.state.postContent;
        const dirty = this.state.dirty;
        let warning = '';

        if( (!title || !content) && dirty) {
            warning = 'please fill in blank field'
        }

        return (
            <NewPost
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                title={title}
                content={content}
                warning={warning} />
        )
    }
}

export default NewPostContainer;



// function mapStateToProps(state){
//     // console.log('state: ', state)
//     return {
//         newPost: state.users.newPost
//     }
// }

// function mapDispatchToProps(dispatch){
//     return {
//         createNewPost: function(postTitle, postContent){
//             return dispatch(createNewPost(postTitle, postContent))
//         }
//     }
// }

// class NewPostContainer extends React.Component {

//     constructor(props) {
//         super(props);

//         console.log('props: ', props)
//         this.state = Object.assign({
//             postTitle: '',
//             postContent: '',
//             dirty: false,
//             error: false
//         }, store.getState())

//         // this.state = {
//         //     postTitle: this.props.postTitle,
//         //     postContent: this.props.postContent,
//         //     dirty: false
//         // }

//         this.handleChange=this.handleChange.bind(this)
//         this.handleSubmit=this.handleSubmit.bind(this)
//     }

//     componentDidMount(){
//         this.unsubscribe = store.subscribe( () => {
//             this.setState(store.getState())
//         })
//         store.dispatch(createNewPost(this.state.postTitle, this.state.postContent))

//         // this.props.createNewPost(this.state.postTitle, this.state.postContent);
//     }

//     //handle change
//     //store the new value in the state
//     handleChange(event){
//         this.setState({
//             [event.target.name]: event.target.value,
//             dirty: true
//         })
//     }

//     //handle submit
//     //call dispatch to 
//     //call the action with the new state value 
//     handleSubmit(event){
        
//         event.preventDefault();

//         //comes from state
//         // const ownerId = this.props.ownerId

//         //comes from form
//         const postTitle = this.state.postTitle;
//         const postContent = this.state.postContent;

//         this.props.createNewPost(postTitle, postContent)
//         .catch(() => this.setState({error: true}))
//         // store.dispatch(
//         //     createNewPost(this.props.postTitle, this.props.postContent))

//         //reset the state
//         this.setState({postTitle: '', postContent: '', dirty: false})
//     }

//     render(){
//         //set the input and dirty val for use here
//         const title = this.props.postTitle;
//         const content = this.props.postContent;
//         const dirty = this.state.dirty;

//         //implement warning if for invalid entry
//         //**************************************
        
//         return(
//             <div>
//                 <NewPost 
//                     {...this.props}
//                     title={title}
//                     content={content}
//                     onChange={this.handleChange}
//                     onSubmit={this.handleSubmit} />
//             </div>

//         )
//     }
// }

// NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPostContainer);

// export default NewPostContainer;
