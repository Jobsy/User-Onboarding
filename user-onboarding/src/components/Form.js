
import { withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"

import LoginForm from "./LoginForm"

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
  