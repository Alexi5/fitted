// import initialState from '../initialState.js'
import React from 'react';
import Posts from '../components/Posts';
import store from '../store.js';
import {connect} from 'react-redux'
import {getAllPosts} from '../action-creators/post'; //get action creators 


//map dispatch to props
function mapStateToProps(state){
    return {
        allPosts: state.posts
    }
}

//map dispatch to props
function mapDispatchToProps(dispatch){
    return {
        getAllPosts: function(){
            dispatch(getAllPosts());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer;

// class PostsContainer extends React.Component {

//     constructor(props) {
//         super(props);
        
//         this.state = {
//             postId: props.postId,
//             title: props.title,
//             posts: props.allPosts
//         }
//     }

//     //in index, call onEnter with getAllPosts
//     componentDidMount() {
//         this.props.getAllPosts()
//         // this.unsubscribe = store.subscribe(() => {
//         //   this.setState(store.getState());
//         // });
//         // store.dispatch(this.props.getAllPosts())
//     }

//     // componentWillUnmount() {
//     //     this.unsubscribe();
//     // }

//     //render and return all posts
//     render() {
//         return (
//             <Posts
//                 id={this.props.id}
//                 title={this.props.title}
//                 posts={this.props.posts}
//             />
//         );
//     }
// }