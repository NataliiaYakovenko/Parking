import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./SignIn.module.scss";
import { signInValidationSchema } from "../../schemas/signInValidationSchema copy";

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const handleSubmitSignIn = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <>
      <h2>Sign Up</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitSignIn}
        validationSchema={signInValidationSchema}
      >
        {(formikProps) => (
          <Form>
            <label>
              Email:
              <Field name="email" placeholder="nickname@gmail.com" />
              <ErrorMessage name="email" />
            </label>
            <br />
            <label>
              Password:
              <Field name="password" placeholder="gr3at@3wdsG" />
              <ErrorMessage name="password" />
            </label>
            <br />
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignIn;
