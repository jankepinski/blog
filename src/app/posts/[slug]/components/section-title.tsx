import { Typography } from "@mui/material";
import { sofiaSans } from "@/app/fonts";

type SectionTitleProps = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <Typography
      variant="h4"
      sx={{ fontWeight: 700, color: "#64e36e", fontFamily: sofiaSans.style.fontFamily }}
    >
      {title}
    </Typography>
  );
};
