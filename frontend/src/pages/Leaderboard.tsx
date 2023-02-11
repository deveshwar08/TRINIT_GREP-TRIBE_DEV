import { Table } from "react-daisyui";
import { useEffect, useState, useCallback } from "react";
import icon from "../assets/icon.svg";
import config from "../config/config";
import axios from "axios";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await fetch(`${config.backend_url}/ranks`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*',
                    // 'Accept': '*/*'
                }
            }).then(res => res.json()
            ).then((res) => {
                setLeaderboard(res);
            }).catch((err) => {
                console.log(err);
            });
        }
        fetchData();
    }, []);

    const customInit = useCallback(async (engine: Engine) => {
        // this adds the bundle to tsParticles
        await loadFull(engine);
    }, []);

    const options = {
        /* custom options */
        fpsLimit: 60,
        particles: {
            number: {
                value: 10,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "polygon",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 6
                },

            },
            opacity: {
                value: 0.2,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.2,
                    sync: false,
                }
            },
            size: {
                value: 60,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 1,
                    sync: false
                }
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse",
                    },
                    onclick: {
                        enable: true,
                        mode: "push",
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            retina_detect: true,

        },
    };

    // let mockleaderboard = [
    //     {
    //         name: "Arun",
    //         carbon: 10
    //     },
    //     {
    //         name: "Bhoopesh",
    //         carbon: 20
    //     },
    //     {
    //         name: "Chitransh",
    //         carbon: 30
    //     },
    //     {
    //         name: "Deveshwar",
    //         carbon: 40
    //     },
    //     {
    //         name: "Eashwra",
    //         carbon: 50
    //     },
    //     {
    //         name: "Fahadh",
    //         carbon: 60
    //     },
    //     {
    //         name: "Giroud",
    //         carbon: 70
    //     },
    //     {
    //         name: "Harish",
    //         carbon: 80
    //     },
    //     {
    //         name: "Ishaath",
    //         carbon: 90
    //     },
    //     {
    //         name: "Jerry",
    //         carbon: 100
    //     },

    // ]

    return (
        <>
            <div className="bg-black min-h-screen w-screen text-white flex justify-center items-center">
                <Particles options={options} init={customInit} />
                <div className="w-2/3 h-4/5 bg-[#383838] z-10 rounded-3xl px-20 py-5 gap-10">
                    <div className="flex justify-between text-3xl font-bold mb-10">
                        <p className="text-pink-500">Rank</p>
                        <p className="text-blue-500">Name</p>
                        <p className="text-yellow-300">Footprint</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        {
                            leaderboard && leaderboard.length > 0 && leaderboard.map((user, index) => {
                                return (
                                    <div className="flex justify-between text-xl" key={index}>
                                        <span className="font-bold">{index+1}</span>
                                        <span className="font-bold">{user.url}</span>
                                        <span className={`${user.carbon < 2 ? "text-green-500" : user.carbon < 10 ? "text-yellow-500" : "text-red-500"} font-bold`}>{user.carbon}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Leaderboard;