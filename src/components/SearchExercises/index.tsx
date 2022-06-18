import { useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { HorizontalScrollbar } from "../HorizontalScrollbar";
import { useExercisesContext } from "../../Hooks";

export const SearchExercises = () => {
  const {
    bodyPart,
    setBodyPart,
    search,
    setSearch,
    fetchExercises,
    loadingExercises,
    bodyPartsDataLoading,
    fetchAllBodyParts,
    bodyParts,
  } = useExercisesContext();

  const handleSearchChange = async () => {
    if (search) {
      await fetchExercises();
    }
  };

  useEffect(() => {
    fetchAllBodyParts();
  }, []);

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: 700,
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          disabled={loadingExercises}
          onClick={handleSearchChange}
          sx={{
            backgroundColor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        {bodyPartsDataLoading ? (
          <Typography>Loading</Typography>
        ) : (
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        )}
      </Box>
    </Stack>
  );
};
