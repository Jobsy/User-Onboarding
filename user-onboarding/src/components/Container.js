// import React, { useState } from "react";
import React from "react";
import { withFormik, Form, Field } from "formik";

function LoginForm() {
 
  // const [user, setUser] = useState({ name: "", email: "", password: "", tosAccept: "", tosDecline: "" });

  // const handleChange = event => {
  //   setUser({ ...user, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(user.name);
  //   console.log(user.email);
  //   console.log(user.password);
  //   console.log(user.tosAccept);
  //   console.log(user.tosDecline);
  // };

  return (
    
    // <div className="loginForm">
    //   {console.log(user)}
      // <form onSubmit={event => handleSubmit(event)}>
      <Form>
        <label>
          Name:
          <Field
            type="text"
            name="name"
            // onChange={event => handleChange(event)}
          />
        </label>
        <br />
        <label>
          Email:
          <Field
            type="email"
            name="email"
            // onChange={event => handleChange(event)}
          />
        </label>
        <br />
        <label>
          Password:
          <Field
            type="text"
            name="password"
            // onChange={event => handleChange(event)}
          />
        </label>
        <br />
        <label>
          Terms of Service:
          <br />
          <Field
            type="checkbox"
            name="tosAccept"
            // onChange={event => handleChange(event)}
          />     Accept
          <br />
          <Field
            type="checkbox"
            name="tosDecline"
            // onChange={event => handleChange(event)}
          />       Decline
        </label>
        <br />
        <button>Submit!</button>
      </Form>
    // </div>
  );
}

export default LoginForm;