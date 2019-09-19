import React, { useState } from "react";

function LoginForm() {
 
  const [user, setUser] = useState({ name: "", email: "", password: "", tosAccept: "off", tosDecline: "off" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.name);
    console.log(user.email);
    console.log(user.password);
    console.log(user.tosAccept);
    console.log(user.tosDecline);
  };

  return (
    <div className="loginForm">
      {console.log(user)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={event => handleChange(event)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={event => handleChange(event)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            name="password"
            onChange={event => handleChange(event)}
          />
        </label>
        <br />
        <label>
          Terms of Service:
          <br />
          <input
            type="checkbox"
            name="tosAccept"
            onChange={event => handleChange(event)}
          />     Accept
          <br />
          <input
            type="checkbox"
            name="tosDecline"
            onChange={event => handleChange(event)}
          />       Decline
        </label>
        <br />
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default LoginForm;