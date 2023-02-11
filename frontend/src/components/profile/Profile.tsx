import React, { useState, useEffect } from "react";
import config from "../../config/config";
import styles from "./profile.module.css";
import profileIcon from "../../assets/profile.svg";
import icon from "../../assets/icon.svg";
import ProfileCard from "../ProfileCard/ProfileCard";

type ProfileCardData = {
    url: string;
    carbon: number;
}

const Profile = () => {
    const [profile, setProfile] = useState<any>();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const cookies = document.cookie.split(";");
        let values = "";
        for (let i = 0; i < cookies.length; i++) {
            if (cookies[i].split("=")[0] === "session" || cookies[i].split("=")[0] === " session")
                values = cookies[i].split("=")[1];
        }
        async function fetchData() {
            console.log("Calling");
            await fetch(`${config.backend_url}/emissions`, {
                method: "GET",
                credentials: "include"
            }).then((res) => {
                return res.json();
            }).then((resp) => {
                setProfile(resp);
            }).catch((err) => {
                console.log(err);
            });
            await fetch(`${config.backend_url}/footprint`, {
                method: "GET",
                credentials: "include"
            })
                .then((res) => {
                    return res.json();
                }
                ).then((resp) => {
                    setTotal(resp);
                }
                ).catch((err) => {
                    console.log(err);
                }
                );

        }
        fetchData();
    });

    console.log(profile);

    return (
        <div className="flex flex-col justify-center items-center gap-10 h-screen bg-zinc-900 text-slate-100">
            <div className="flex justify-between items-center gap-10 h-1/5 w-screen bg-zinc-800 text-4xl pr-4 ">
                <div
                    className="flex flex-cols justify-center items-center"
                >
                    <div className="square">
                        <img src={profileIcon} alt="profile" />
                    </div>
                    {Math.round(total)}g
                </div>
                <div className="flex flex-cols justify-center items-center">
                    <img src={icon} />
                    Carbon Meter
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-screen h-4/5 p-5 overflow-y-scroll">
                {
                    profile && profile.length > 0 && profile.map((item: any, index: any) => {
                        return <ProfileCard sessionId={item.session} time={item.startTime} data={item.emissions} key={index}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default Profile;
