import BodyPartImage from "../../assets/icons/body-part.png";
import TargetImage from "../../assets/icons/target.png";
import EquipmentImage from "../../assets/icons/equipment.png";
import { Button, Stack, Typography } from "@mui/material";

type IExerciseDetail = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

type Props = {
  exerciseDetail: IExerciseDetail;
};

export const Detail = ({ exerciseDetail }: Props) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

  const extraDetail = [
    {
      id: Math.random(),
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      id: Math.random(),
      icon: TargetImage,
      name: target,
    },
    {
      id: Math.random(),
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold" }}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} {` `} is one of the best exercises
          to target your {target}. It will help you improve your mood and again
          energy.
        </Typography>

        {extraDetail.map(({ icon, name, id }) => (
          <Stack gap="24px" direction="row" alignItems="center" key={id}>
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={icon}
                alt={name}
                loading="lazy"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
