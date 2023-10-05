import React, { useContext, useState } from "react";
import Navber from "../.../../../shared/Navber";
import InputGroup from "../../components/InputGroup";
import { authContext } from "../../providers/authProvider";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const Register = () => {
  const [error, setError] = useState("");
  const { createUSer } = useContext(authContext);

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const photo = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.Password.value;

    if (password.length < 6) {
      setError("vai password 6 ar beshi hote hobe");
    }

    createUSer(email, password)
      .then((result) => {
        console.log("create a user", result.user);

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("added name and photo");
          })
          .catch((error) => {
            setError(error.message)
          });
        swal("Good job!", "user create successfully", "success");
      })
      .catch((e) => setError(e.message));
  };
  return (
    <>
      <div className="mt-4 bg-[#F3F3F3]">
        <Navber />
      </div>
      <div className="w-full flex justify-center items-center h-screen">
        <div className="bg-[#fff] w-[500px] p-16 shadow-lg">
          <h1 className="my-4 text-2xl font-semibold">Register your account</h1>
          <hr />
          <form onSubmit={handleRegister}>
            <InputGroup
              id={"name"}
              name={"name"}
              type={"text"}
              text={"Your name"}
              placeholder={"Enter your name"}
            />

            <InputGroup
              id={"email"}
              name={"email"}
              type={"email"}
              text={"Email address"}
              placeholder={"Enter your email address"}
            />

            <InputGroup
              id={"photoUrl"}
              name={"photoUrl"}
              type={"text"}
              text={"Photo URL"}
              placeholder={"Enter your photo url"}
            />

            <InputGroup
              id={"Password"}
              name={"Password"}
              type={"password"}
              text={"Enter Password"}
              placeholder={"Enter your Password"}
            />

            <div className="flex gap-2 mb-3">
              <input
                required
                className="w-[18px]"
                type="checkbox"
                name="trams"
                id="trams"
              />
              <label htmlFor="trams">Accept Term & Conditions</label>
            </div>

            <button
              type="submit"
              className="btn rounded-none w-full px-7 bg-[#403F3F] text-white"
            >
              Register
            </button>
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
