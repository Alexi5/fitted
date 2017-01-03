// import initialState from '../initialState.js'
import React from 'react';
import Lists from '../components/Lists';
import store from '../store.js';
import {connect} from 'react-redux'
import {getAllLists} from '../action-creators/list'; //get action creators 


//map dispatch to props
function mapStateToProps(state){
    return {
        allLists: state.lists
    }
}

//map dispatch to props
function mapDispatchToProps(dispatch){
    return {
        getAllLists: function(){
            dispatch(getAllLists());
        }
    }
}

const ListsContainer = connect(mapStateToProps, mapDispatchToProps)(Lists)
export default ListsContainer;