import React from 'react';


const Display = props => {

  return (
    <div>
      <h3>Posted Users</h3>
      {props.users.map(user => (
        <>
          Name: {user.name} <br />
          Email: {user.email} <br />
          Password: {user.password} <br /><br /><br />
        </>
      ))}
    </div>
  )
};

export default Display;
