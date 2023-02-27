import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Main from "./pages/Main";
import Repository from "./pages/Repository";

function Rotas() {
  let { repository } = useParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/repository/:repository" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
