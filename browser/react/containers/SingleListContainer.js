import React, {Component} from 'react';
import store from '../store.js';
import SingleList from '../components/SingleList';
import {getSingleList, 
		addPhotoToList } from '../action-creators/list'; 
import {connect} from 'react-redux' 

//map dispatch to props
function mapStateToProps(state){
    return {
        listName: state.lists.name,
        listId: state.lists.listId,
        listPhotos: state.lists.listPhotos,
        listTags: state.lists.tags
    }
}

//map dispatch to props
function mapDispatchToProps(dispatch){
    return {
        getSingleList: function(list){
            dispatch(getSingleList(list));
        },
        addPhotoToList: function(listId, photoId){
        	dispatch(addPhotoToList(listId, photoId))
        }
    }
}

const SingleListContainer = connect(mapStateToProps, mapDispatchToProps)(SingleList)
export default SingleListContainer;

// import React from 'react';
// import store from '../store.js';
// import SingleList from '../components/SingleList';
// import { getSingleList, addPhotoToList } from '../action-creators/list'; //get action creators 
// import {connect} from 'react-redux'

// //map dispatch to props
// function mapStateToProps(state){
//     return {
//         singleList: state.lists
//     }
// }

// //map dispatch to props
// function mapDispatchToProps(dispatch){
//     return {
//         getSingleList: function(list){
//             dispatch(getSingleList(list));
//         },
//         addPhotoToList: function(listId, photoId){
//         	dispatch(addPhotoToList(listId, photoId))
//         }
//     }
// }

// class SingleListContainer extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             photo: '',
//             dirty: false
//         }

//         this.handleChange=this.handleChange.bind(this)
//         this.handleSubmit=this.handleSubmit.bind(this)
//     }

//     // componentDidMount(){
//     //     // this.unsubscribe = store.subscribe( () => {
//     //     //     this.setState(store.getState())
//     //     // })
//     //     // store.dispatch(createNewList(this.props.listName))
//     //     const createNewList = this.props.createNewList;
//     //     createNewList(this.state.listName);
//     // }

//     //handle change
//     //store the new value in the state
//     handleChange(event){
//         const innput = event.target.value;
//         this.setState({
//             photo: input, 
//             dirty: true
//         })
//     }

//     //handle submit
//     //call dispatch to call the action with the new state value 
//     handleSubmit(event){
        
//         event.preventDefault();
//         store.dispatch(addPhotoToList(this.state.photo))

//         //reset the state
//         this.setState({ 
//             photo:'', 
//             dirty: false
//         })
//     }

//     render(){
//         //set the input and dirty val for use here
//         const photo = this.state.photo;
//         const dirty = this.state.dirty;

//         //implement warning if for invalid entry
//         //**************************************
//         let warning = '';
//         if(!listName && dirty) {
//             warning = 'please name you list';
//         }
        
//         return(
//             <div>
//                 <NewList 
//                     handleChange={this.handleChange}
//                     handleSubmit={this.handleSubmit}
//                     value={photo} 
//                     warning={warning}/>
//             </div>

//         )
//     }
// }


// const SingleListContainer = connect(mapStateToProps, mapDispatchToProps)(SingleListContainer)

// export default SingleListContainer;