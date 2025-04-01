import {
  ContactContainer,
  IconWrapper,
  HeaderContact,
  ContentContact,
  FootertContact,
} from "./contact.styled";
import { MapaContainer } from "../../components/Contact/MapContainer/MapaContainer";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ContactContainer>
      <HeaderContact>
        <MapaContainer />
      </HeaderContact>
      <ContentContact>
        <div className="LinksSociales">
          <div className="Email">
            <a href="mailto:isaiasadso2023@gmail.com" target="_blank" rel="noopener noreferrer">
              <IconWrapper color="#D44638">
                <FaEnvelope />
                {!isMobile && <div className="TextIcon2">isaiasadso2023@gmail.com</div>}
              </IconWrapper>
            </a>
          </div>
          <div className="Linkedln">
            <a href="https://www.linkedin.com/in/isaias-caballero-2798992b8/" target="_blank" rel="noopener noreferrer">
              <IconWrapper color="#0077B5">
                <FaLinkedin />
                <div className="TextIcon2">LinkedIn</div>
              </IconWrapper>
            </a>
          </div>
        </div>
        <div className="GitHub">
          <a href="https://github.com/isaiasAdso" target="_blank" rel="noopener noreferrer">
            <IconWrapper color="#171515">
              <FaGithub />
            </IconWrapper>
          </a>
        </div>
      </ContentContact>
      <FootertContact>
        <div className="instagram">
          <a href="https://www.instagram.com/isaias_jajaja/" target="_blank" rel="noopener noreferrer">
            <IconWrapper color="#E1306C">
              <FaInstagram />
              <div className="TextIcon">Instagram</div>
            </IconWrapper>
          </a>
        </div>
        <div className="whatsapp">
          <a href="https://wa.me/+573203382405" target="_blank" rel="noopener noreferrer">
            <IconWrapper color="#25D366">
              <FaWhatsapp />
              <div className="TextIcon">WhatsApp</div>
            </IconWrapper>
          </a>
        </div>
        <div className="TikTok">
          <a href="https://www.tiktok.com/@isaias_developer" target="_blank" rel="noopener noreferrer">
            <IconWrapper color="#000000">
              <FaTiktok />
              <div className="TextIcon">TikTok</div>
            </IconWrapper>
          </a>
        </div>
      </FootertContact>
    </ContactContainer>
  );
}
