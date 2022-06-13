import { Box } from "@mui/material";
import { Exercises } from "../../components/Exercises";
import { HeroBanner } from "../../components/HeroBanner";
import { SearchExercises } from "../../components/SearchExercises";

export const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};
