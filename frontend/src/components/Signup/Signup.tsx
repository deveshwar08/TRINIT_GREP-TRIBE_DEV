import React from "react";
import icon from "../../assets/icon.svg";
import styles from "./signup.module.css";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen  bg-black text-slate-100">
      <div className={"flex flex-col justify-evenly items-center h-fit w-fit p-8 bg-zinc-900 rounded-2xl " +styles.singup}>
        <div className="text-7xl font-bold  text-green-500 p-4">
          <img src={icon} className="inline pr-5" />
          SIGNUP
        </div>
        <form className="flex flex-col justify-evenly items-center h-1/2 w-fit">
          <div className="flex flex-col justify-center items-center">
            <input
              className="text-2xl p-4 m-6 rounded-2xl bg-zinc-600"
              name="username"
              id="username"
              placeholder="username"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <input
              className="text-2xl p-4 mb-8 rounded-2xl bg-zinc-600"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <input
              className="text-2xl p-4 rounded-2xl bg-zinc-600"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
