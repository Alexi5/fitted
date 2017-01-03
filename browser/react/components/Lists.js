import React from 'react'
import {Link} from 'react-router';

const Lists = (props) => {

  let lists = props.allLists
  let empty ='';
  
  if(lists.length === 0){
    empty = 'There are no lists at this time';
  }

  function separateTags(arr, splitter) {
    if (arr.length === 0) {
        return [];
    }

    return arr.slice(0).join(splitter)
  }

  return (
    <div>
        <div className="header">
            <h3>Lists</h3>
        </div>
        { empty && <div className="notice">{empty}</div> }
        <div className='row'> 
            <ul className='lists'>
            {  
                lists && Object.values(lists).map((list, listId) => {
                    return (
                     <div className="list-group-item" key={listId}>
                        <Link className="list-link" to={`/lists/${list.listId}`}>
                            <div className="list">
                                <h5>
                                    <span>{list.name}</span>
                                </h5>
                            </div>
                        </Link>
                        <p>tags:
                        {
                            list.tags && separateTags(list.tags, ', ')
                        }
                        </p>
                     </div>  
                    );
                })
            }
            </ul>
        </div>
        <br/>
        <div>
            <section>
                <h4 className="menu-item">
                    <Link to='/new-list'>Create New List</Link>
                </h4>
            </section>
        </div>
    </div>
  )
};

export default Lists;
