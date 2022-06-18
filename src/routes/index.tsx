import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ExerciseDetail } from "../pages/ExercisesDetail";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/exercises/:id" element={<ExerciseDetail />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
