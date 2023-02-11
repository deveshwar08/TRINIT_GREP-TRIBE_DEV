import React from "react";
import styles from "./bottom.module.css";
import RankingImage from "../../assets/ranking.png";
import TrackImage from "../../assets/Track.png";
import LearnImage from "../../assets/LearnMore.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Bottom: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container + ' flex flex-col p-10 justify-center items-center'}>
            <div className='basis-[70%] w-screen flex max-lg:flex-col items-center justify-center gap-[8vw] z-10'>
                <div className={styles.divEl + ' flex flex-col xl:w-80 xl:h-80 sm:h-64 sm:w-64 rounded-3xl bg-[#262626] justify-center items-center gap-10 '}
                    onClick={() => navigate('/leaderboard')}
                >
                    <img src={RankingImage} alt="logo" />
                    <p>Global Rankings</p>
                </div>
                <div
                    className={
                        styles.divEl +
                        " flex flex-col xl:w-80 xl:h-80 sm:h-64 sm:w-64 rounded-3xl bg-[#262626] justify-center items-center gap-10 "
                    }
                    onClick={(() => navigate('/profile'))}
                >
                    <img src={TrackImage} alt="logo" />
                    <p>Track Your Footprint</p>
                </div>
                <div
                    className={
                        styles.divEl +
                        " flex flex-col xl:w-80 xl:h-80 sm:h-64 sm:w-64 rounded-3xl bg-[#262626] justify-center items-center gap-10 "
                    }
                >
                    <img src={LearnImage} alt="logo" />
                    <p>Learn More</p>
                </div>
            </div>
            <div className="basis-[10%] ">
                <p className="text-xl">
                    Install our chrome extension and contribute towards a greener society
                </p>
            </div>
            <div className={styles.btn + ' flex basis-[20%] items-center justify-center  w-screen font-bold text-green-500 z-10'}>
                <button className='hover:bg-green-500'>Install Now</button>
            </div>
        </div>
    );
};

export default Bottom;
