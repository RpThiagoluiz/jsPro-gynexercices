import { Stack, Typography } from "@mui/material";
import { ExerciseCard } from "../ExerciseCard";

type IExercise = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

type Props = {
  exercises: IExercise[];
  title: string;
};

export const SimilarCardList = ({ title, exercises }: Props) => {
  return (
    <>
      <Typography variant="h3" mb={2}>
        {title}
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {exercises.length &&
          exercises.slice(0, 4).map((exercise) => (
            <Stack m={2}>
              <ExerciseCard exercise={exercise} />
            </Stack>
          ))}
      </Stack>
    </>
  );
};
