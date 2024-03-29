import { sofiaSans } from "@/app/fonts";
import { Box, Typography } from "@mui/material";

type ThumbnailProps = {
  title: string;
  subtitle?: string;
  description: string;
  slug: string;
};

export const Thumbnail = ({
  title,
  subtitle,
  description,
  slug,
}: ThumbnailProps) => {
  return (
    <Box
      sx={{
        width: { xs: "80vw", md: "500px" },
        backgroundColor: "#1E262F",
        borderRadius: "12px",
        p: 6,
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 4, fontWeight: 700, fontFamily: sofiaSans.style.fontFamily }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#708090",
            mt: -4,
            mb: 4,
            fontFamily: sofiaSans.style.fontFamily,
          }}
        >
          {subtitle}
        </Typography>
      )}
      <Typography sx={{ mb: 4, fontFamily: sofiaSans.style.fontFamily }}>
        {description}
      </Typography>
      <a href={`/posts/${slug}`}>
        <Typography
          sx={{
            mb: 2,
            fontWeight: 700,
            fontFamily: sofiaSans.style.fontFamily,
          }}
        >
          Read more
        </Typography>
      </a>
    </Box>
  );
};
