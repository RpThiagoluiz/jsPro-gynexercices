export const headers = {
  rapidApiExercisesKey: `${process.env.REACT_APP_RAPIDAPI_KEY}`,
  rapidApiExercisesHost: `${process.env.REACT_APP_RAPIDAPI_HOST}`,
  rapidApiYoutubeSearchVideoKey: `${process.env.REACT_APP_RAPIDAPI_YOUTUBE_SEARCH_KEY}`,
  rapidApiYoutubeSearchVideoHost: `${process.env.REACT_APP_RAPIDAPI_YOUTUBE_SEARCH_HOST}`,
};

export const exercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": headers.rapidApiExercisesKey,
    "X-RapidAPI-Host": headers.rapidApiExercisesHost,
  },
};

export const fetchExercises = async (url: string, options: any) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
