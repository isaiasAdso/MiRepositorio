import React from "react";
import styled from "styled-components";
import { FaHome, FaFolder, FaUser, FaEnvelope } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import SwitchToogle from "../SwitchTheme/SwitchToogle";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${({ theme }) => theme.BackgroundNavbar};
  padding: 12px 20px;
  border-radius: 15px;
  width: 90%;
  max-width: 400px;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const NavItem = styled.div<{ $isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: ${({ $isActive }) => ($isActive && "transparent")};

  svg {
    color: ${({ $isActive }) => ($isActive ? "#3b82f6" : "#ffffff")};
    font-size: 22px;
  }

  /* Eliminar outline en todos los estados */
  &:focus, &:active, &:hover {
    outline: none !important;
    box-shadow: none !important;
    -webkit-tap-highlight-color: transparent !important; /* Para Safari/Chrome */
  }

  /* Eliminar highlight en móviles (específico para navegadores móviles) */
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
  user-select: none;
`;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavbarContainer>
      <NavItem $isActive={location.pathname === "/"} onClick={() => navigate("/")}>
        <FaHome />
      </NavItem>
      <NavItem $isActive={location.pathname === "/projects"} onClick={() => navigate("/projects")}>
        <FaFolder />
      </NavItem>
      <NavItem $isActive={location.pathname === "/profile"} onClick={() => navigate("/profile")}>
        <FaUser />
      </NavItem>
      <NavItem $isActive={location.pathname === "/contact"} onClick={() => navigate("/contact")}>
        <FaEnvelope />
      </NavItem>
      <NavItem>
        <SwitchToogle />
      </NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
