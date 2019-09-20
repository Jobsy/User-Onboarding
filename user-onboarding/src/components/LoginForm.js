
import React, { useState, useEffect } from "react";
import { Form, Field } from "formik";

import Display from "./Display";


function LoginForm({ errors, touched, values, status }) {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (status) {
      setUsers(users.concat(status))
    }

  }, [status])

  return (

    <Form>
      <label>
        Name:
        <Field
          type="text"
          name="name"
          placeholder="Enter Your Full Name"
        />
        {touched.name && errors.name && <p>{errors.name}</p>}

      </label>
      <br />
      <label>
        Email:
        <Field
          type="email"
          name="email"
          placeholder="Enter your email addres"
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </label>
      <br />
      <label>
        Password:
        <Field
          type="password"
          name="password"
          placeholder="Enter Your Password"
        />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </label>
      <br />
      <label>
        Terms of Service:
          <br />
        <Field
          type="checkbox"
          name="tos"
          checked={values.tos}
        /> Accept
          <br />
        {touched.tos && errors.tos && <p>{errors.tos}</p>}
      </label>
      <br />
      <button>Submit</button>
      <Display users={users} />
    </Form>

  );
}


export default LoginForm;
