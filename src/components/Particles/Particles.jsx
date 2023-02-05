import React ,{ useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Particless() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },

          fullScreen: {
            enable: true,
            zIndex: -5,
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "polygon",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: [
                {
                  nb_sides: 3,
                  particles: {
                    opacity: {
                      value: 0.8,
                      random: {
                        enable: true,
                        minimumValue: 0.5,
                      },
                    },
                    size: {
                      value: 12,
                      random: {
                        enable: true,
                        minimumValue: 10,
                      },
                    },
                    color: {
                      value: "#1500ff",
                    },
                  },
                },
                {
                  nb_sides: 5,
                  particles: {
                    opacity: {
                      value: 0.5,
                    },
                    size: {
                      value: 8,
                      random: {
                        enable: false,
                      },
                    },
                    color: {
                      value: "#00a2ff",
                    },
                  },
                },
                {
                  nb_sides: 8,
                  particles: {
                    opacity: {
                      value: 1,
                      random: false,
                    },
                    size: {
                      value: 20,
                      random: {
                        enable: true,
                        minimumValue: 15,
                      },
                    },
                    color: {
                      value: "#181680",
                    },
                  },
                },
              ],
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#009dff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              onclick: {
                enable: false,
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
                opacity: 0.8,
                speed: 3,
              },
              repulse: {
                distance: 200,
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
          background: {
            color: "#000000",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
    </div>
  );
}

export default Particless;