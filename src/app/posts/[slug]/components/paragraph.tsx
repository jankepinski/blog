import { sofiaSans } from "@/app/fonts";
import { Typography } from "@mui/material";

type ParagraphProps = {
  text: string;
};

export const Paragraph = ({ text }: ParagraphProps) => {
  return (

      <Typography
        variant="body1"
        className={sofiaSans.className}
        sx={{
          fontSize: "20px",
          fontWeight: "500",
          my: 4,
          wordWrap: "wrap",
          overflow: "hidden",
        }}
      >
        {text}
      </Typography>
  );
};
