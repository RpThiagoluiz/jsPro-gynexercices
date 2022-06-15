import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Detail } from "../../components/Detail";
import { ExerciseVideos } from "../../components/ExerciseVideos";
import { SimilarExercises } from "../../components/SimilarExercises";
import { endPoints } from "../../Services";
import useAxios from "axios-hooks";
import { headers } from "../../requests/fetchExercises";

type IVideoContents = {
  video: {
    channelId: string;
    channelName: string;
    description: string;
    lengthText: string;
    publishedTimeText: string;
    thumbnails: [
      {
        height: number;
        url: string;
        width: number;
      }
    ];
    title: string;
    videoId: string;
    viewCountText: string;
  };
};

type IExerciseVideoData = {
  contents: IVideoContents[];
  estimatedResults: string;
  next: string;
};

export const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({
    bodyPart: "",
    equipment: "",
    gifUrl: "",
    id: "",
    name: "",
    target: "",
  });

  const [exerciseVideoData, setExerciseVideoData] =
    useState<IExerciseVideoData>({
      contents: [],
      estimatedResults: "",
      next: "",
    });

  const { id } = useParams();

  const [{ loading: loadingExercises }, getExercises] = useAxios(
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": headers.rapidApiExercisesKey,
        "X-RapidAPI-Host": headers.rapidApiExercisesHost,
      },
    },
    { manual: true }
  );

  const [{ loading: loadingVideosData }, getYoutubeSimilarExercises] = useAxios(
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": headers.rapidApiYoutubeSearchVideoKey,
        "X-RapidAPI-Host": headers.rapidApiYoutubeSearchVideoHost,
      },
    },
    { manual: true }
  );

  useEffect(() => {
    const fetchExercisesDetails = async () => {
      const url = id && endPoints.exercisesDetail.replace("{id}", id);
      const { data: exerciseDetailData } = await getExercises({
        url,
      });
      setExerciseDetail(exerciseDetailData);

      const { data: videosData } = await getYoutubeSimilarExercises({
        url: `${endPoints.youtubeSearchExercise}`,
        params: {
          query: exerciseDetailData.name,
        },
      });

      setExerciseVideoData(videosData);
    };
    fetchExercisesDetails();
  }, []);

  if (loadingExercises && !exerciseDetail.name) {
    return <Typography>Loading...</Typography>;
  }

  if (loadingVideosData) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideoData={exerciseVideoData}
        exerciseDetailName={exerciseDetail.name}
      />
      <SimilarExercises />
    </Box>
  );
};
