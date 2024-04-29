import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import "../button/button.component";
import {
  signInUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    //await createUserDocumentFromAuth(user);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("email password", email, " - ", password);
      const { user } = await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential")
        alert("Invalid Email Or Password");
      else console.log("user sign in encounter an error", error);
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <p>Sign In With Email And Password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
