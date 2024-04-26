import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { wait } from "@testing-library/user-event/dist/utils";
import SignUp from "../../components/sign-up-form/sign-up-form.component";

const getGoogleRedirectResult = async () => {
  const result = await getRedirectResult(auth);
  console.log(result);
  if (result) {
    const userDocRef = await createUserDocumentFromAuth(result.user);
  }
};

const SignIn = () => {
  useEffect(() => {
    getGoogleRedirectResult();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <br />
      <br />
      <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button>
      <SignUp></SignUp>
    </div>
  );
};

export default SignIn;
