import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import styles from "./SignUp.module.scss";
import { signUpValidationSchema } from "../../schemas/signUpValidationSchema";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/userSlice";

const initialValues = {
  nickname: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmitSignUp = async (values, { resetForm }) => {
    await dispatch(registerUser(values));
    resetForm();
  };
  return (
    <>
      <h2>Sign Up</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitSignUp}
        validationSchema={signUpValidationSchema}
      >
        {() => (
          <Form>
            <label>
              Nickname:
              <Field name="nickname" placeholder="Your nickname" />
              <ErrorMessage name="nickname" />
            </label>
            <br />
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
            <button type="submit">Registration</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
