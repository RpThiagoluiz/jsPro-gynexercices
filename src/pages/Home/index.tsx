import { Box } from "@mui/material";
import { Exercises } from "../../components/Exercises";
import { HeroBanner } from "../../components/HeroBanner";
import { SearchExercises } from "../../components/SearchExercises";
import { ExercisesContextProvider } from "../../Contexts";

export const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <ExercisesContextProvider>
        <SearchExercises />
        <Exercises />
      </ExercisesContextProvider>
    </Box>
  );
};
