import { sofiaSans } from "@/app/fonts";
import { Divider, Typography } from "@mui/material";

type TitleProps = {
  title: string;
  subtitle?: string;
};

export const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "600",
          mt: 15,
          fontFamily: sofiaSans.style.fontFamily,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "500",
            color: "lightgray",
            mt: 4,
            fontFamily: sofiaSans.style.fontFamily,
          }}
        >
          {subtitle}
        </Typography>
      )}
      <Divider
        sx={{ borderColor: "#213041", borderWidth: "1px", mt: 1, mb: 12 }}
      />
    </>
  );
};
