import { Stack, Typography } from "@mui/material";
import Icon from "../../../assets/icons/gym.png";

type Props = {
  item: string;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
};

export const BodyPart = ({ item, bodyPart, setBodyPart }: Props) => {
  const handleBodyPart = () => {
    setBodyPart(item);
    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      onClick={handleBodyPart}
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "none",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img
        src={Icon}
        alt="dumbell"
        style={{
          width: "40px",
          height: "40px",
        }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};
