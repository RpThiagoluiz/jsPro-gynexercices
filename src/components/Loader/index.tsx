import { Stack } from "@mui/material";
import { Bars } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
      mt="25%"
    >
      <Bars color="gray" width={400} />
    </Stack>
  );
};
