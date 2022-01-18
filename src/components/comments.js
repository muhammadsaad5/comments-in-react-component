import React from "react";


const Comment = ({avatar , date , author , text}) => {
    return(
  <div className="ui comment">
    <a className="avatar">
      <img src={avatar}/>
    </a>
    <div className="content">
      <a className="author">{author}</a>
    <div className="metadata">
        <span className="date">{date}</span>
    </div>
       <div className="text">
        {text}
       </div> 
    <div className="actions">
        <a className="reply">Reply</a>
    </div>
    </div>
  </div>      
   
    );
}

export default Comment;