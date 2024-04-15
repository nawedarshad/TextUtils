import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import About from "./component/About";
import Alert from "./component/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  const [btn_label_mode, set_btn_label_mode] = useState("dark");

  const shownAlert = (message, type, title) => {
    setAlert({ msg: message, type: type, title: title });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      set_btn_label_mode("light");
      document.body.style.backgroundColor = "#212529";
      shownAlert("Enabled Dark Mode", "success", "Success");
    } else {
      setMode("light");
      set_btn_label_mode("dark");
      document.body.style.backgroundColor = "white";
      shownAlert("Enabled Light Mode", "success", "Success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          btn_label_mode={btn_label_mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />{" "}
        <div className="container my-4">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <Textform heading="Enter your text to analyze" mode={mode} />
              }
            />{" "}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
