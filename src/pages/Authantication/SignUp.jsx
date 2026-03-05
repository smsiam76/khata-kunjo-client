import React, { useContext } from "react";

import InputField from "../../components/Shared/Input/InputField";
import Button from "../../components/Shared/Button/Button";
import AuthContext from "../../provider/AuthContext";
import { useNavigate } from "react-router";
import axios from "axios";

const SignUp = () => {
  const { createUser, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log("regisrter", userInfo);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        const userInfo = {
          email,
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime,
          role: "user",
        };
        axios
          .post("http://localhost:5000/users", userInfo)
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              navigate("/dashboard/profile");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = {
      email,
      password,
    };
    console.log("login", userInfo);
    signInUser(email, password)
      .then((res) => {
        const user = res.user;
        navigate("/dashboard/profile");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="my-16 bg-white py-16">
      <div className="max-w-10/12 mx-auto">
        <h3 className="text-2xl font-bold text-primary mb-8">
          Registration / Sign In
        </h3>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 border border-primary/20 p-8 rounded-md bg-accent/5">
            <div>
              <h4 className="text-xl font-medium">Create an Account</h4>
              <span className="block w-full h-0.5 bg-accent/10 mt-2 mb-3"></span>
              <p className="mb-4">
                Please enter your email address to create an account.
              </p>
            </div>
            <form onSubmit={handleSignUp}>
              <div className="mb-3">
                <label className="block mb-2 font-medium text-accent text-sm">
                  Email Address{" "}
                </label>
                <InputField
                  name="email"
                  type="email"
                  className="bg-white"
                ></InputField>
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium text-accent text-sm">
                  Password
                </label>
                <InputField
                  name="password"
                  type="password"
                  className="bg-white"
                ></InputField>
              </div>
              <Button>Create an Account</Button>
            </form>
          </div>
          <div className="flex-1 border border-primary/20 p-8 rounded-md bg-accent/5">
            <div>
              <h4 className="text-xl font-medium">Already Registered?</h4>
              <span className="block w-full h-0.5 bg-accent/10 mt-2 mb-3"></span>
            </div>
            <form onSubmit={handleSignIn}>
              <div className="mb-3">
                <label className="block mb-2 font-medium text-accent text-sm">
                  Email Address{" "}
                </label>
                <InputField
                  name="email"
                  type="email"
                  className="bg-white"
                ></InputField>
              </div>
              <div className="mb-2">
                <label className="block mb-2 font-medium text-accent text-sm">
                  Password
                </label>
                <InputField
                  name="password"
                  type="password"
                  className="bg-white"
                ></InputField>
              </div>
              <a href="" className="block text-sm hover:underline mb-6">
                Forgot Password
              </a>
              <Button>Create an Account</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
