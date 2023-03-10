import React, { useCallback } from "react";
import icon from "../../assets/icon.svg";
import styles from "./login.module.css";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import config from "../../config/config";

const Login: React.FC = () => {
    const customInit = useCallback(async (engine: Engine) => {
        // this adds the bundle to tsParticles
        await loadFull(engine);
    }, []);
    const handleLogin = async () => {
        const username = document.getElementById("username") as HTMLInputElement;
        const password = document.getElementById("password") as HTMLInputElement;
        const data = {
            username: username.value,
            password: password.value,
        };
        await fetch(`${config.backend_url}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    };

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
    return (
        <div className="flex flex-col justify-center items-center h-screen  bg-black text-slate-100">
            <Particles options={options} init={customInit} />
            <div className={"flex flex-col justify-evenly items-center h-fit w-fit p-8 bg-zinc-900 rounded-2xl z-10 " + styles.login}>
                <div className="text-7xl font-bold  text-green-500 p-2">
                    <img src={icon} className="inline pr-5" />
                    LOGIN
                </div>
                <div className="flex flex-col justify-evenly items-center h-1/2 w-fit" action="none">
                    <div className="flex flex-col justify-center items-center">
                        <input
                            className="text-2xl p-4 m-8 rounded-2xl bg-zinc-600"
                            name="username"
                            id="username"
                            placeholder="username"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <input
                            className="text-2xl p-4 rounded-2xl bg-zinc-600"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                        />
                    </div>
                    <button onClick={handleLogin}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
