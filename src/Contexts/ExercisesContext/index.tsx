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

  const fetchExercises = async () => {
    if (bodyPart === "all") {
      const { data: exercisesData } = await getExercises();
      setExercises(exercisesData);
    } else {
      const { data: exercisesData } = await getExercises({
        url: `${endPoints.exercises}/bodyPart/${bodyPart}`,
      });
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
