import React from "react";
import styles from "./profile.module.css";
import profileIcon from "../../assets/profile.svg";
import icon from "../../assets/icon.svg";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen bg-zinc-900 text-slate-100">
      <div className="flex justify-between items-center gap-10 h-1/5 w-screen bg-zinc-800 text-4xl pr-4 ">
        <div
        className="flex flex-cols justify-center items-center"
        >
          <div className="square">
            <img src={profileIcon} alt="profile" />
          </div>
          1000g
        </div>
        <div className="flex flex-cols justify-center items-center">
          <img src={icon} />
          Carbon Meter
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 w-screen h-4/5">
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
      </div>
    </div>
  );
};

export default Profile;
