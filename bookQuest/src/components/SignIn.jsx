import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";

export default function SignIn() {
  return (
    <div className="items-center">
      <h1 className="items-center text-center text-3xl font-bold py-8 font-heading">
        Sign in
      </h1>
      <GoogleButton />
    </div>
  );
}
