import React, { useCallback } from 'react';
import Bottom from '../Bottom/Bottom';
import Top from './Top';
import styles from './home.module.css';

import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const Home: React.FC = () => {

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

    return (
        <div className={styles.home}>
            <Particles options={options} init={customInit} />
            <Top />
            <Bottom />
        </div>
    )
}

export default Home;
