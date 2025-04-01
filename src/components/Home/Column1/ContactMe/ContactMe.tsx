import {
  ContactMeContainer,
  ContactMeHeader,
  ContactMeBody,
} from "./ContactMe.styled";
import { MdArrowOutward } from "react-icons/md";
import {ContactMeLogic } from "./ContacMe.logic";
export function ContactMe() {

  const {UrlProjects} = ContactMeLogic();

  return (
    <ContactMeContainer onClick={UrlProjects}>
      <ContactMeHeader>
        <div className="Titulo">Alguna Pregunta?</div>
        <div className="Icon">
          <MdArrowOutward className="IconoArrow" />
        </div>
      </ContactMeHeader>
      <ContactMeBody>
        <div className="Text">
          No dudes en contactarme. Estoy aqui para ayudarte.
        </div>
      </ContactMeBody>
    </ContactMeContainer>
  );
}
