import React from "react";
import styles from "./profile.module.css";
import profileIcon from "../../assets/profile.svg";
import icon from "../../assets/icon.svg";
import ProfileCard from "../ProfileCard/ProfileCard";

type ProfileCardData = {
  url: string;
  amount: number;
}

const Profile = () => {

  let data : ProfileCardData[] = [
    {
      url: "https://www.google.com",
      amount: 100,
    },
    {
      url: "https://www.google.com",
      amount: 200,
    },
    {
      url: "https://www.google.com",
      amount: 400,
    },
    {
      url: "https://www.google.com",
      amount: 500,
    },
    {
      url: "https://www.google.com",
      amount: 600,
    },
    {
      url: "https://www.google.com",
      amount: 700,
    },
    {
      url: "https://www.google.com",
      amount: 800,
    },

  ]

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
      <div className="grid grid-cols-2 gap-4 w-screen h-4/5 p-5 overflow-y-scroll">
        <ProfileCard sessionId="#249145" time="14" data={data} />
        <ProfileCard sessionId="#249145" time="14" data={data} />
        <ProfileCard sessionId="#249145" time="14" data={data} />
        <ProfileCard sessionId="#249145" time="14" data={data} />
        <ProfileCard sessionId="#249145" time="14" data={data} />
        <ProfileCard sessionId="#249145" time="14" data={data} />
      </div>
    </div>
  );
};

export default Profile;
