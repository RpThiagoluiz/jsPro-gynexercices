import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const NotFound = () => {
  return (
    <Box className="notFoundContainer">
      <Stack justifyContent="center">
        <Typography alignSelf="center" className="notFoundContainerTitle">
          Page NotFound
        </Typography>
      </Stack>
    </Box>
  );
};
