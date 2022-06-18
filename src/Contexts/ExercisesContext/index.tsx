import useAxios from "axios-hooks";
import { createContext, useState } from "react";
import { headers } from "../../requests/fetchExercises";
import { endPoints } from "../../Services";

type IExercise = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

type IExercisesContext = {
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
  exercises: IExercise[];
  setExercises: React.Dispatch<React.SetStateAction<IExercise[]>>;
  bodyParts: string[];
  setBodyParts: React.Dispatch<React.SetStateAction<[] | string[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  loadingExercises: boolean;
  fetchExercises: () => Promise<void>;
  bodyPartsDataLoading: boolean;
  fetchAllBodyParts: () => Promise<void>;
};

type ExercisesContextProviderProps = {
  children: React.ReactNode;
};

export const ExercisesContext = createContext({} as IExercisesContext);

export const ExercisesContextProvider = ({
  children,
}: ExercisesContextProviderProps) => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [{ loading: loadingExercises }, getExercises] = useAxios<IExercise[]>(
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

  const [{ loading: bodyPartsDataLoading }, getAllBodyParts] = useAxios<
    string[]
  >(
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

  const filterExercises = (exercisesData: IExercise[]) => {
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

  const fetchExercises = async () => {
    if (search) {
      setBodyPart("all");
      setCurrentPage(1);
      const { data: exercisesData } = await getExercises();

      if (!exercisesData) {
        return; //TODO: handle error
      }

      filterExercises(exercisesData);

      return;
    }

    if (bodyPart === "all") {
      const { data: exercisesData } = await getExercises();
      setCurrentPage(1);
      setExercises(exercisesData);
    } else {
      const { data: exercisesData } = await getExercises({
        url: `${endPoints.exercises}/bodyPart/${bodyPart}`,
      });
      setCurrentPage(1);
      setExercises(exercisesData);
    }
  };

  const fetchAllBodyParts = async () => {
    const { data: bodyPartsData } = await getAllBodyParts();
    setBodyParts(["all", ...bodyPartsData]);
  };

  return (
    <ExercisesContext.Provider
      value={{
        bodyPart,
        setBodyPart,
        exercises,
        setExercises,
        bodyParts,
        setBodyParts,
        search,
        setSearch,
        currentPage,
        setCurrentPage,
        loadingExercises,
        fetchExercises,
        bodyPartsDataLoading,
        fetchAllBodyParts,
      }}
    >
      {children}
    </ExercisesContext.Provider>
  );
};
