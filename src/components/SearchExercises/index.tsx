import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { headers } from "../../requests/fetchExercises";
import { endPoints } from "../../url";

type IExercise = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

export const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState<IExercise[] | []>([]);
  const [bodyParts, setBodyParts] = useState<string[] | []>([]);

  const [{ data: exercisesData, loading }, handleSearch] = useAxios<
    IExercise[]
  >(
    {
      url: endPoints.exercises,
      method: "GET",
      headers: {
        "X-RapidAPI-Key": headers.rapidApiExercisesKey,
        "X-RapidAPI-Host": headers.rapidApiExercisesHost,
      },
    },
    { manual: true }
  );

  const [
    { data: bodyPartsData, loading: bodyPartsDataLoading },
    getAllBodyParts,
  ] = useAxios<string[]>(
    {
      url: endPoints.exercisesBodyPartList,
      method: "GET",
      headers: {
        "X-RapidAPI-Key": headers.rapidApiExercisesKey,
        "X-RapidAPI-Host": headers.rapidApiExercisesHost,
      },
    },
    { manual: true }
  );

  // const handleSearch = async () => {
  //   if (!search) {
  //     // Pure FetchData
  //     const exercisesData = await fetchExercises(
  //       endPoints.exercisesBodyPartList,
  //       exercisesOptions
  //     );

  //     console.log(exercisesData);
  //   }
  // };

  const filterExercises = () => {
    if (!exercisesData) {
      return;
    }

    const searchExercises = exercisesData.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
    );

    setSearch("");
    setExercises(searchExercises);
  };

  const handleSearchChange = async () => {
    if (search) {
      await handleSearch();
      filterExercises();
    }
  };

  useEffect(() => {
    console.log(`aqui useEffect firstTime`);
    const fetchFirstAcess = async () => {
      await getAllBodyParts();
    };
    fetchFirstAcess();
  }, []);

  useEffect(() => {
    if (bodyPartsData) {
      setBodyParts(["all", ...bodyPartsData]);
    }
  }, [bodyPartsData]);

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
          disabled={loading}
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
        {/* TODO: Horizontalscroll */}
        {!bodyPartsDataLoading &&
          bodyParts.map((bodyPart) => (
            <Typography key={bodyPart}>{bodyPart}</Typography>
          ))}
      </Box>
    </Stack>
  );
};
