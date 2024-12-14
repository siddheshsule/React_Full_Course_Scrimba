import "./App.css";
import Logo from "./components/Logo";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <div className="header">
          <Logo />
          <Navbar />
        </div>
        <MainContent />
      </div>
    </>
  );
}

export default App;
