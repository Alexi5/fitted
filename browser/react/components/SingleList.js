import React, {Component} from 'react';
import {Link, browserHistory, IndexRedirect} from 'react-router'
import store from '../store.js';
import {addPhotoToList} from '../action-creators/list';
const Img = require('react-picture').Image; 

class SingleList extends Component{
  constructor(props){
    super()

    this.state = {
      input: '',
      dirty: false
    }

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  //put in utilities file
  separateTags(arr, splitter) {
    if (arr.length === 0) {
        return [];
    }

    return arr.slice(0).join(splitter)
  }

  handleChange(e){
    this.setState({
          input: e.target.value,
          dirty: true
        })
  }

  handleSubmit(e){
    e.preventDefault();
    store.dispatch(addPhotoToList(this.props.listId, this.state.input))

    this.setState({
          input: '',
          dirty: true
        })

  }

  render(){
    let listName = this.props.listName;
    let listId = this.props.listId;
    let listPhotos = this.props.listPhotos;
    let tags = this.props.listTags;
    let index = 0;

    return(
      <div>
        <h3>{listName}</h3>
        <div className='row'> 
        {
          listPhotos && Object.values(listPhotos).map((photo) => {
            return (
              <div className="list-group-item" key={index++}>
                  <br/>        
                    <Img alt='photo' srcSet={photo}/>
                  <br/>
              </div> 
            );
          })
        }
        <br/>
          <small>tags:
          {
            tags && this.separateTags(tags, ', ')
          }
          </small>
        <br/>
          <h2>Add Photo</h2>
          <br/>
          <form className='form-row' onSubmit={this.handleSubmit.bind(this)}>
              {/*add warninghere*/}
              <div className='form-group'>
                <label>Upload Photo</label>
                <br/>
                <input
                  onChange={this.handleChange.bind(this)}
                  type="url" 
                  placeholder="Add Photo Link here"
                  // pattern="file:///.+" //type="file" or ="url" 
                  // required 
                  /> 
              </div>
              <div className='form-group'>
                <button type="submit"> Save Photo </button>
              </div>
           </form>
        </div>
        {/*<div>
                    <button type="delete" onClick={deleteList(list.listId)}
                    className="btn btn-primary">Delete List</button>
          </div>*/
        }
      </div>
    )
  }
  
}

export default SingleList;


// const SingleList = (props) => {

//   // console.log('single list props: ', props)
//   let listName = props.listName;
//   let listPhotos = props.listPhotos;
//   let tags = props.listTags; //an object

// return (
//     <div>
//         <h3>{listName}</h3>
//         <div className='row'> 
//         {
//           listPhotos && Object.values(listPhotos).map((photo) => {
//             return (
//               <div className="list-group-item" key={index++}>
//                   <br/>        
//                     <Img alt='photo' srcSet={photo}/>
//                   <br/>
//               </div> 
//             );
//           })
//         }
//         <br/>
//           <small>tags:
//           {
//             tags && separateTags(tags, ', ')
//           }
//           </small>
//         <br/>
//           <h2>Add Photo</h2>
//           <br/>
//           <form className='form-row' onSubmit={handleSubmit}>
//               {/*add warninghere*/}
//               <div className='form-group'>
//                 <label>Upload Photo</label>
//                 <br/>
//                 <input
//                   onChange={handleChange}
//                   type="url" 
//                   placeholder="Add Photo Link here"
//                   // pattern="file:///.+" //type="file" or ="url" 
//                   // required 
//                   /> 
//               </div>
//               <div className='form-group'>
//                 <button type="submit"> Save Photo </button>
//               </div>
//            </form>
//         </div>
//         {/*<div>
//                     <button type="delete" onClick={deleteList(list.listId)}
//                     className="btn btn-primary">Delete List</button>
//           </div>*/
//         }
//     </div>
//   )
// };