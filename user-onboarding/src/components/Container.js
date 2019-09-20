import React, { useState, useEffect } from "react";
// import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"

import Display from "./Display";


// const [user, setUser] = useState([]);


function LoginForm({ errors, touched, values, status }) {
  console.log("ssssss: ", status)
  // const [user, setUser] = useState({ name: "", email: "", password: "", tos: ""});
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (status) {
      setUsers(users.concat(status))
    }

  }, [status])
  console.log("uuuuuuuuu: ", users)
  // const handleChange = event => {
  //   setUser({ ...user, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(user.name);
  //   console.log(user.email);
  //   console.log(user.password);
  //   console.log(user.tos);
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
          placeholder="Enter Your Full Name"
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
          placeholder="Enter your email addres"
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
          placeholder="Enter Your Password"
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
          name="tos"
          checked={values.tos}
        // onChange={event => handleChange(event)}
        />     Accept
          <br />
        {/* <Field
            type="checkbox"
            name="tosDecline"
            // onChange={event => handleChange(event)}
          />       Decline */}
        {touched.tos && errors.tos && <p>{errors.tos}</p>}
      </label>
      <br />
      <button>Submit!</button>
      <label>
        Display
          <br />
        <Field
          // type="checkbox"
          name="display"

        />
      </label>
      
        {/* {users.map((user) => ( */}
          <Display users={users}/>
        {/* ))} */}
       
    </Form>
    
  );
}


// function FormikForm (){


const FormikLoginForm = withFormik({
  // const [user, setUser] = useState([]);

  mapPropsToValues({ name, email, password, tos, display }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: tos || false,
      display: display || []
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

  handleSubmit(values, { setStatus }) {
    console.log("vvvvv: ", values, setStatus);



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
        console.log(response.data)
        setStatus(response.data)

      })
      .catch(error => {
        console.log(error);
      })
  }

})(LoginForm);

// return(FormikLoginForm)

// }
// console.log("kkkkkk: ", user)
// export default LoginForm;
export default FormikLoginForm;
// export default FormikForm;