const baseUrls = {
  exercises: process.env.REACT_APP_RAPIDAPI_EXERCISES_DB_URL,
};

export const endPoints = {
  exercises: `${baseUrls.exercises}/exercises`,
  exercisesBodyPartList: `${baseUrls.exercises}/exercises/bodyPartList`,
};
