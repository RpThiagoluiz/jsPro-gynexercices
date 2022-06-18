import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../assets/images/Logo-1.png";

export const Footer = () => (
  <Box mt="80px" bgcolor="#fff3f4">
    <Stack
      gap="40px"
      alignItems="center"
      px="40px"
      pt="24px"
      flexDirection="row"
      justifyContent="center"
    >
      <img src={Logo} alt="logo" width="200px" height="40px" />
      <Typography variant="h5" pb="40px" mt="40px">
        Made with ❤️ by Thiago in JavaScript Mastery Class!
      </Typography>
    </Stack>
  </Box>
);
