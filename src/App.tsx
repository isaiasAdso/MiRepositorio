import ParticlesBackground from "./components/Home/Column1/Gradients/ParticlesBackground.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import AppRoutes from "./routes/AppRoutes.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ActivePageProvider } from "./context/ActivePageProvider.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";
import "./app.css";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <ActivePageProvider>
          <ParticlesBackground />
          <div className="layout">
            <main className="containerMain">
              <AppRoutes />
            </main>
            <div className="footerNavbar">
            <Navbar />
            </div>
          
          </div>
        </ActivePageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
