import React from 'react';
import SinglePhoto from '../components/SinglePhoto';
import store from '../store.js';
import {connect} from 'react-redux';
import {getSinglePhoto} from '../action-creators/photo'
const Img = require('react-picture').Image; 


//map dispatch to props
function mapStateToProps(state){
    return {
        singlePhoto: state.photos,
        photoTags: state.photos.tag
    }
}

//map dispatch to props
function mapDispatchToProps(dispatch){
    return {
        getSinglePost: function(photo){
            dispatch(getSinglePhoto(photo));
        }
    }
}

const SinglePhotoContainer = connect(mapStateToProps, mapDispatchToProps)(SinglePhoto)
export default SinglePhotoContainer;

// export default class extends React.Component {

//     constructor() {
//         super();

//         this.state = {
//             id: '',
//             imageUrl: '',
//             tags: [],
//             caption: ''
//         }
//     }

//     //render and return single photo
//     render() {
//         return (
//             <SinglePhoto 
//                 id={this.state.id}
//                 imageUrl={this.state.imageUrl}
//                 tags={this.state.tags}
//                 caption={this.state.caption}
//             />
//         );
//     }
// }