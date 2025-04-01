import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import Home from "../pages/home/home";
import Projects from "../pages/projects/projects";
import Profile from "../pages/profile/profile";
import Contact from "../pages/contact/contact";

// Estilos aplicados al contenedor de cada página
const MotionPageWrapper = styled(motion.div)`
  width: 100%;
  flex-grow: 1; // Ocupa todo el espacio disponible
  display: flex;
  align-items: center;
  justify-content: center;

`;

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

// Componente con animaciones de transición
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <MotionPageWrapper
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </MotionPageWrapper>
);

export default AppRoutes;
