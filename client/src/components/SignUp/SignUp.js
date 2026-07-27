import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./SignUp.module.scss";
import { signUpValidationSchema } from "../../schemas/signUpValidationSchema";

const initialValues = {
  nickname: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const handleSubmitSignUo = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <>
      <h2>Sign Up</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitSignUo}
        validationSchema={signUpValidationSchema}
      >
        {(formikProps) => {
          <Form>
            <label>
              Nickname:
              <Field name="nickname" placeholder="Your nickname" />
              <ErrorMessage name="nickname" />
            </label>

            <label>
              Email:
              <Field name="email" placeholder="nickname@gmail.com" />
              <ErrorMessage name="email" />
            </label>

            <label>
              Password:
              <Field name="password" placeholder="gr3at@3wdsG" />
              <ErrorMessage name="password" />
            </label>
          </Form>;
        }}
      </Formik>
    </>
  );
};

export default SignUp;
