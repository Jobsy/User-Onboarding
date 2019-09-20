import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"

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


const FormikLoginForm = withFormik({

  mapPropsToValues({ name, email, password, tos }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: tos || false
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
    tos: Yup.boolean()
      .oneOf([true], "Must accept Terms of Service to submit"),
  }),

  handleSubmit(values, { resetForm, setStatus }) {

    const sentData = {
      // data: {
      name: values.name,
      email: values.email,
      password: values.password,
      tos: values.tos,
      // display: valu[]
      // }
    };

    axios.post(" https://reqres.in/api/users", sentData)
      .then(response => {
        setStatus(response.data);
        resetForm();
      })
      .catch(error => {
        console.log(error);
      })
  }

})(LoginForm);


export default FormikLoginForm;
