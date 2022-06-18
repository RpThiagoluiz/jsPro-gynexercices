import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { HorizontalScrollbar } from "../HorizontalScrollbar";
import { SimilarCardList } from "../SimilarCardList";

type ITargetMuscleExercise = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

type Props = {
  targetMuscleExercise: ITargetMuscleExercise[];
  equipementExerciseSimilarTarget: ITargetMuscleExercise[];
};

export const SimilarExercises = ({
  targetMuscleExercise,
  equipementExerciseSimilarTarget,
}: Props) => {
  return (
    <Box
      sx={{
        mt: {
          lg: "100px",
          xs: "0",
        },
      }}
    >
      <SimilarCardList
        title="Exercises that target the same muscle group"
        exercises={targetMuscleExercise}
      />

      <SimilarCardList
        title="Exercises that target the same muscle group"
        exercises={equipementExerciseSimilarTarget}
      />
    </Box>
  );
};
