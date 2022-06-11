import { Route, Routes } from "react-router-dom";
import { ExerciseDetail } from "../pages/ExercisesDetail";
import { Home } from "../pages/Home";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/exercises/:id" element={<ExerciseDetail />} />
  </Routes>
);
