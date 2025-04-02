import { MyCvContainer, MyCvHeader, MyCvContent } from "./MyCv.styled";
import { MdDownload } from "react-icons/md";

export function MyCv() {
  const handleDownload = () => {
    const pdfUrl = "/MiCv/Cv_isaiascaballeromendoza.pdf"; 
    // Ruta del archivo en la carpeta public
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Mi_CV.pdf"; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <MyCvContainer onClick={handleDownload}>
      <MyCvHeader>
        <MdDownload className="IconDownload" />
      </MyCvHeader>
      <MyCvContent>
        <div className="Text1">
          Descarga <span className="Text2">mi CV</span>
        </div>
      </MyCvContent>
    </MyCvContainer>
  );
}
