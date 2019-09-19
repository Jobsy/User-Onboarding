// import React, { useState } from "react";
import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";


function LoginForm({ errors, touched, values }) {

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
        {touched.name && errors.name && <p>{errors.name}</p>}

      </label>
      <br />
      <label>
        Email:
          <Field
          type="email"
          name="email"
        // onChange={event => handleChange(event)}
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </label>
      <br />
      <label>
        Password:
          <Field
          type="password"
          name="password"
        // onChange={event => handleChange(event)}
        />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </label>
      <br />
      <label>
        Terms of Service:
          <br />
        <Field
          type="checkbox"
          name="tosAccept"
          checked={values.tosAccept}
        // onChange={event => handleChange(event)}
        />     Accept
          <br />
        {/* <Field
            type="checkbox"
            name="tosDecline"
            // onChange={event => handleChange(event)}
          />       Decline */}
          {touched.tosAccept && errors.tosAccept && <p>{errors.tosAccept}</p>}
      </label>
      <br />
      <button>Submit!</button>
    </Form>
    // </div>
  );
}

const FormikLoginForm = withFormik({

  mapPropsToValues({ name, email, password, tosAccept }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tosAccept: tosAccept || false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3)
      .required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required(),
    tosAccept: Yup.boolean()
    .oneOf([true], "Must accept Terms of Service to submit"),
  }),



})(LoginForm);

// export default LoginForm;
export default FormikLoginForm;