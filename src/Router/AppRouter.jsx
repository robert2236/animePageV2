import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Anime } from "../Pages/Anime";

export function AppRouter() {
  return (
    <>
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
          {/* <Route path="*" element={<Error404/>}/> */}
        </Routes>
      }
    </>
  );
}
