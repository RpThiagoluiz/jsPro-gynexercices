import { Box } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./routes";
import { Footer } from "./components/Footer";
import "./App.css";

export const App = () => (
  <Box width="400px" sx={{ width: { x1: "1488px" } }} m="auto">
    <Navbar />
    <AppRoutes />
    <Footer />
  </Box>
);
