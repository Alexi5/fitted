import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import store from './store'
import axios from 'axios'
import {Provider} from 'react-redux'

//import components ======
//single user page
import User from './components/User';
import Main from './components/Main';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import SearchForm from './components/Search';

//sigle list and single page
import SingleList from './components/SingleList';
import SinglePost from './components/SinglePost';
import SinglePhoto from './components/SinglePhoto';

//multiple (list of) posts
import Lists from './components/Lists';
import Posts from './components/Posts';
import Photos from './components/Photos';

//creating new
import NewList from './components/NewList'
import NewPost from './components/NewPost'
import NewPhoto from './components/NewPhoto'

//import containers
// import UserContainer from './containers/UserContainer';
import MainContainer from './containers/MainContainer'
import UserContainer from './containers/UserContainer';
import LoginFormContainer from './containers/LoginFormContainer';
import SingleListContainer from './containers/SingleListContainer';
import SinglePostContainer from './containers/SinglePostContainer';
import SinglePhotoContainer from './containers/SinglePhotoContainer';

import ListsContainer from './containers/ListsContainer';
import PostsContainer from './containers/PostsContainer';
import PhotosContainer from './containers/PhotosContainer';

import NewListContainer from './containers/NewListContainer';
import NewPostContainer from './containers/NewPostContainer';
import NewPhotoContainer from './containers/NewPhotoContainer';

//import action creators
import {getUserById, getAllUserPosts,
		getAllUserLists, getAllUserPhotos} from './action-creators/user';
import {getAllLists, getSingleList} from './action-creators/list';
import {getAllPosts, getSinglePost} from './action-creators/post';
import {getAllPhotos, getSinglePhoto} from './action-creators/photo';

//onEnter functions
//for onEnter of main path
const onMainEnter = function(){  
	Promise.all([
		// axios.get('/api/home'),
		axios.get('/api/posts'),
		axios.get('/api/photos'),
		axios.get('/api/lists')
	])
	.then( res => {
		console.log('res: ', res)	
	})
	.then( () => {
		store.dispatch(getAllPosts());
		store.dispatch(getAllPhotos());
		store.dispatch(getAllLists());
	})
}

const onListsEnter = function () {
	store.dispatch(getAllLists())
};
const onListEnter = function (nextRouterState) {
  const listId = nextRouterState.params.listId;
  store.dispatch(getSingleList(listId));
};

const onPostsEnter = function () {
	store.dispatch(getAllPosts())
};
const onPostEnter = function (nextRouterState) {
  const postId = nextRouterState.params.postId;
  store.dispatch(getSinglePost(postId));
};

const onPhotosEnter = function () {
	store.dispatch(getAllPhotos())
};
const onPhotoEnter = function (nextRouterState) {
  const photoId = nextRouterState.params.photoId;
  store.dispatch(getSinglePhoto(photoId));
};

const onUserEnter = function(nextRouterState){  
	const userId = nextRouterState.params.userId;
	store.dispatch(getUserById(userId));
}
const onUserPosts = function(nextRouterState){
	const userId = nextRouterState.params.userId;
	store.dispatch(getAllUserPosts(userId)); 
}
const onUserLists = function(nextRouterState){
	const userId = nextRouterState.params.userId;
	store.dispatch(getAllUserLists(userId)); 
}
const onUserPhotos = function(nextRouterState){
	const userId = nextRouterState.params.userId;
	store.dispatch(getAllUserPhotos(userId)); 
}

//======================
// const onLoginLeave = function(nextRouterState, transition){
// 	if(nextRouterState.store){
// 		const userId = nextRouterState.params.userId

//      if(!nextRouterState.store.getState()){
//         transition.to('/login', null, {nextPathname: nextRouterState.location.pathname});
//      }
//      // else {
//      // 	transition.to('/users/${userId}', null {nextPathname: nextRouterState.location.pathname})
//      // }
//   }
// }


//render out
ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}> 

			<Route path='/' 
				component={MainContainer} 
				onEnter={onMainEnter} />
				
			<Route path='/login' 
				component={LoginFormContainer} 
				// onLeave={onLoginLeave}
				/> 

			<Route path='/signup' 
				component={SignUpForm} />
			<Route path='/search' 
				component={SearchForm} />

			<Route path="/lists" 
			       component={ListsContainer}
			       onEnter={onListsEnter}/>
			<Route path="/lists/:listId" 
				   component={SingleListContainer}
				   onEnter={onListEnter}/>

			<Route path="/posts" 
				   component={PostsContainer} 
				   onEnter={onPostsEnter}/>
			<Route path="/posts/:postId" 
				   component={SinglePostContainer}
				   onEnter={onPostEnter}/>

			<Route path="/photos" 
			       component={PhotosContainer}
			       onEnter={onPhotosEnter}/>
			<Route path="/photos/:photoId" 
				   component={SinglePhotoContainer}
				   onEnter={onPhotoEnter}/>

			<Route path="/new-list" 
				   component={NewListContainer} />
		    <Route path="/new-post" 
				   component={NewPostContainer} />
		    <Route path="/new-photo" 
				   component={NewPhotoContainer}/>

		    <Route path="/users/:userId" 
			       component={UserContainer}
			       onEnter={onUserEnter}/>
	   		<Route path="/users/:userId/posts"
	   			   component={UserContainer}
	   			   onEnter={onUserPosts} />
	   		<Route path="/users/:userId/photos"
	   			   component={UserContainer}
	   			   onEnter={onUserPhotos} />
	   		<Route path="/users/:userId/lists"
	   		       component={UserContainer}
	   			   onEnter={onUserLists} />

		</Router>
	</Provider>
	,document.getElementById('app')
)