import React from "react";
import Comment from "./components/comments"
import faker from "faker";


const App = ()=>{
    return(
   <div className="ui container comments">
       <Comment 
        avatar={faker.image.avatar()}
       author={faker.name.firstName()}
       date="02/03/2021"
       text={faker.lorem.sentence()}
       />
       <Comment
         avatar={faker.image.avatar()}
       author={faker.name.firstName()}
       date="02/03/2021"
       text={faker.lorem.sentence()}
       />
       <Comment
         avatar={faker.image.avatar()}
       author={faker.name.firstName()}
       date="02/03/2021"
       text={faker.lorem.sentence()}
       />
   </div>
    );
} 

export default App