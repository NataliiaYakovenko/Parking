import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./SignIn.module.scss";
import { signInValidationSchema } from "../../schemas/signInValidationSchema copy";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/userSlice";

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();

  const handleSubmitSignIn = async (values, { resetForm }) => {
    await dispatch(loginUser(values));
    resetForm();
  };

  return (
    <>
      <h2>Sign In</h2>

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
              <Field
                name="password"
                type="password"
                placeholder="gr3at@3wdsG"
              />
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
