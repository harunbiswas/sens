import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import MainPannel from "./components/MainPannel";
import RightPannel from "./components/RightPannel";
import Topbar from "./components/Topbar";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);
  return (
    <div className={`main ${(theme === "light" && "light") || ""}`}>
      <BrowserRouter>
        <Topbar theme={theme} setTheme={setTheme} />
        <div className="main-wrp">
          <MainPannel />
          <RightPannel />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
