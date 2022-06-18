import { Stack } from "@mui/material";
import { Rings } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
      mt="5%"
    >
      <Rings color="gray" width={400} />
    </Stack>
  );
};
