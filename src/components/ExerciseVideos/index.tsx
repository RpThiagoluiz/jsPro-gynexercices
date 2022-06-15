import { Box, Stack, Typography } from "@mui/material";
import { endPoints } from "../../Services";

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

type Props = {
  exerciseVideoData: IExerciseVideoData;
  exerciseDetailName: string;
};

export const ExerciseVideos = ({
  exerciseVideoData,
  exerciseDetailName,
}: Props) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span
          style={{
            color: "#ff2625",
            textTransform: "capitalize",
          }}
        >
          {exerciseDetailName}
        </span>{" "}
        exercise videos
      </Typography>

      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: {
            lg: "row",
          },
          gap: { lg: "100px", xs: "0" },
        }}
      >
        {exerciseVideoData?.contents?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`${endPoints.youtubeWatch.replace(
              "{videoId}",
              item.video.videoId
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className="exercise-video-thumbnail"
            />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};
