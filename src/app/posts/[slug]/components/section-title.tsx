import { Typography } from "@mui/material";
import { sofiaSans } from "@/app/fonts";

type SectionTitleProps = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <Typography
      variant="h4"
      className={sofiaSans.className}
      sx={{ fontWeight: 700, color: "#64e36e" }}
    >
      {title}
    </Typography>
  );
};
