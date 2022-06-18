import { Article } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const EmptyData = () => {
  return (
    <Box mt="50px" p="20px">
      <Stack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p="20px"
      >
        <Article sx={{ fontSize: 80, color: "#cccccc" }} />
        <Typography alignSelf="center" variant="h5" mt={3}>
          No Data
        </Typography>
      </Stack>
    </Box>
  );
};
