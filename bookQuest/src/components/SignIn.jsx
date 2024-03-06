import { FaGithubAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//TODO - change the login to use identity services
export default function SignIn() {
  const signInBtnDetails = [
    {
      name: "Google",
      icon: <FcGoogle size={30} />,
      primaryColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-700",
    },
    {
      name: "Github",
      icon: <FaGithubAlt size={30} color="black" />,
      primaryColor: "bg-slate-700",
      hoverColor: "hover:bg-slate-900",
    },
  ];

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/home"); //todo change it to account page later
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center bg-[#EBE9DD] h-screen">
      <div className="flex flex-col w-[40%] h-[50%] mt-10 items-center gap-4 rounded-md  bg-gray-50 border-slate-600">
        <h1 className="items-center text-center text-3xl font-extrabold py-8 font-heading">
          Sign in to BookQuest
        </h1>
        {signInBtnDetails.map((button) => (
          <div
            key={button.name}
            className={`${button.primaryColor} ${button.hoverColor} text-white h-[50px] w-[240px] rounded-md shadow-md text-center text-lg transition duration-200 hover:border-slate-600 hover:shadow-lg font-roboto cursor-pointer select-none justify-center items-center`}
            onClick={handleGoogleSignIn}
          >
            <div className="w-[48px] h-[48px] text-center flex items-center justify-center mt-[1px] ml-[1px] float-left bg-white rounded-md whitespace-no-wrap">
              {button.icon}
            </div>
            <p className="items-center justify-center text-center">
              Sign In with {button.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
