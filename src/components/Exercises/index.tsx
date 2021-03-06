import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { ExerciseCard } from "../ExerciseCard";
import { useExercisesContext } from "../../Hooks";
import { Loader } from "../Loader";
import { EmptyData } from "../EmptyData";

type IExercise = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

export const Exercises = () => {
  const [currentExercises, setCurrentExercises] = useState<IExercise[]>([]);

  const {
    bodyPart,
    exercises,
    fetchExercises,
    loadingExercises,
    currentPage,
    setCurrentPage,
  } = useExercisesContext();

  const exercisesPerPage = 9;

  const formatedPagination = () => {
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const exercisesSlice = exercises.slice(
      indexOfFirstExercise,
      indexOfLastExercise
    );

    setCurrentExercises(exercisesSlice);
  };

  const paginate = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 1800, behavior: "smooth" });
    formatedPagination();
  };

  useEffect(() => {
    fetchExercises();
    setCurrentPage(1);
  }, [bodyPart]);

  useEffect(() => {
    formatedPagination();
  }, [exercises]);

  if (loadingExercises) {
    return <Loader />;
  }

  if (!currentExercises.length) {
    return <EmptyData />;
  }

  return (
    <Box
      id="exercises"
      sx={{
        mt: {
          lg: "110px",
        },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="26px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: {
            lg: "110px",
            xs: "50px",
          },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};
