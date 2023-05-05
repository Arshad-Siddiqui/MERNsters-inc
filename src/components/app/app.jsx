import React from "react";
import Homepage from "../../pages/home/home";
import Form from "../signup/form";
import { Route, Routes } from "react-router-dom";
import Footer from "../lib/footer/footer";
import Chat from "../chat/chat";
import "../../App.css";
import LoginPage from "../login/loginPage";
import Swipe from "../swipe/swipe";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/logout" element={<Homepage />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/swipe" element={<Swipe />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
