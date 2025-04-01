import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useThemeContext } from "../../../../hooks/UseThemeContext";

const ParticlesBackground = () => {
  const { theme } = useThemeContext();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // 🔹 Se coloca en toda la pantalla detrás del contenido
        background: {
          color: theme.backgroundColor,
        },
        particles: {
          number: { value: 100 },
          color: { value: theme.color },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: { distance: 100 },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
