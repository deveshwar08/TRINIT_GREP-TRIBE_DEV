import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Login</h1>
        <form>
          <div className="flex flex-col justify-center items-center">
            <input name="username" id="username" placeholder="username" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <input
              type="password"
              name="ConfirmPassword"
              id="password"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
