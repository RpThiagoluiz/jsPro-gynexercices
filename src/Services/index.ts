const baseUrls = {
  exercises: process.env.REACT_APP_RAPIDAPI_EXERCISES_DB_URL,
  youtubeSearch: process.env.REACT_APP_RAPIDAPI_YOUTUBE_SEARCH_DB_URL,
  youtubeHttp: `https://www.youtube.com`,
};

export const endPoints = {
  exercises: `${baseUrls.exercises}/exercises`,
  exercisesDetail: `${baseUrls.exercises}/exercises/exercise/{id}`,
  exercisesBodyPartList: `${baseUrls.exercises}/exercises/bodyPartList`,
  exercisesDetailSimilar: `${baseUrls.exercises}/exercises/target/{similarTargetMuscle}`,
  equipementExercisesSimilar: `${baseUrls.exercises}/exercises/equipment/{equipmentExercise}`,
  youtubeSearchExercise: `${baseUrls.youtubeSearch}/search`,
  youtubeWatch: `${baseUrls.youtubeHttp}/watch?v={videoId}`,
};
