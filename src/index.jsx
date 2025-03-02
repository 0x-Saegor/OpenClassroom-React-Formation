import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Header from "./components/Header";
import Error from "./components/Error";
import Freelances from "./pages/Freelances";
import Results from "./pages/Results";
import Footer from "./components/Footer";
import { ThemeProvider, SurveyProvider } from "./utils/context/";
import GlobalStyle from "./utils/style/GlobalStyle";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
