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
        className={sofiaSans.className}
        sx={{ fontWeight: "600", mt: 15 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          className={sofiaSans.className}
          sx={{
            fontSize: "20px",
            fontWeight: "500",
            color: "lightgray",
            mt: 4,
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
