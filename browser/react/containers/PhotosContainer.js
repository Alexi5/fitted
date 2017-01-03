import React from 'react';
import Photos from '../components/Photos';
import store from '../store.js'
import {connect} from 'react-redux'
import {getAllPhotos} from '../action-creators/photo';

//map dispatch to props
function mapStateToProps(state){
    return {
        allPhotos: state.photos
    }
}

//map dispatch to props
function mapDispatchToProps(dispatch){
    return {
        getAllPhotos: function(){
            dispatch(getAllPhotos());
        }
    }
}

const PhotosContainer = connect(mapStateToProps, mapDispatchToProps)(Photos);

export default PhotosContainer



// export default class extends React.Component {    
//     constructor() {
//         super();

//         this.state = {
//             id: '',
//             imageUrl: '',
//             tags: [],
//         }
//     }

//     //render and return all photos
//     render() {
//         return (
//             <Photos
//                 id={this.state.id}
//                 imageUrl={this.state.imageUrl}
//                 tags={this.state.tags}
//             />
//         );
//     }
// }