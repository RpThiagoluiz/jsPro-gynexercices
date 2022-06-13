import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "../../assets/images/banner.png";

export const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: "212px",
          xs: "70px",
        },
        ml: {
          sm: "50px",
        },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="28px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "40px",
          },
        }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize={22} lineHeight="35px" mb={4}>
        Check out the most effect exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: "#FF2625",
          padding: "12px",
        }}
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        fontSize="200px"
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: {
            lg: "block",
            xs: "none",
          },
        }}
      >
        Exercise
      </Typography>

      <img
        src={HeroBannerImage}
        alt="Woman Come the Gyn"
        className="hero-banner-img"
      />
    </Box>
  );
};
