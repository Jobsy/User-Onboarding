import React from 'react';





const Display = props => {
console.log("/////: ", props.users)
    return (
      <div>
        <h3>Posted Users</h3>
        {props.users.map(user => (
          <>{user.name} <br/>  
          {user.email} <br/> 
          {user.password} <br/> 
          
          </>
        ))}
      </div>
    )
  };
  
  export default Display;
  