import React from "react";
import Homepage from "./pages/home/home";
import Form from "./pages/signup/signup";
import { Route, Routes } from "react-router-dom";
import Chat from "./components/chat/chat";
import "./App.css";
import LoginPage from "./pages/login/login";
import Swipe from "./components/swipe/swipe";
import NotFound from "./pages/notfound/notfound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
