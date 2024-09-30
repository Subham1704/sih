import { useState } from "react";
import "./App.css";
import welcome from "./welcome.gif";
import hindi from './hindi.gif';
import Speech from "./Speech";

function App() {
  const [language, setLanguage] = useState("English");
  const [avatar,setAvatar]=useState(welcome)
  const changeLanguage = () => {
    setLanguage(language === "English" ? "Hindi" : "English");
    if(language==='English'){
      setAvatar(hindi)
    }
    else{
      setAvatar(welcome)
    }
  };

  return (
    <div className="container-fluid">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Welcome to SambodhanDost</span>
        </div>
      </nav>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <img
          src={avatar}
          alt="loading..."
          style={{ marginTop: 100, height: 500 }}
        />

        <h1 style={{ color: "white" }}>
          {" "}
          {language === "English" ? "Welcome" : "स्वागत"}{" "}
        </h1>

        <button
          type="button"
          className="btn btn-light"
          style={{ marginLeft: "20px" }}
          onClick={changeLanguage}
        >
          In {language === "English" ? "Hindi" : "English"}
        </button>
      </div>
      <Speech/>
    </div>
  );
}

export default App;