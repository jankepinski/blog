import { sofiaSans } from "@/app/fonts";
import { Box, Chip, Typography } from "@mui/material";

const techStack = [
  "React",
  "Next",
  "Redux",
  "TypeScript",
  "Material-UI",
  "Shadcn/ui",
  "TailwindCSS",
  "Jest",
  "React Testing Library",
  "Cypress",
  "Webpack",
  "Babel",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Mongoose",
  "Firebase",
  "Prisma",
  "Contentful",
  "Figma",
  "OpenAI Api",
  "Jira",
  "Confluence",
  "Coda.io"
];

export const TechStack = () => {
  return (
    <Box>
      <Typography
        sx={{
          color: "white",
          fontSize: "28px",
          textAlign: "center",
          mb: 2,
          fontFamily: sofiaSans.style.fontFamily
        }}
      >
        Tech Stack
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", columnGap: 1, rowGap: 2 }}>
        {techStack.map((tech, index) => {
          return (
            <Chip key={index} label={tech} sx={{color: "lightgray", backgroundColor: "#1E262F", fontSize: "16px", fontFamily: sofiaSans.style.fontFamily}}/>
          );
        })}
      </Box>
    </Box>
  );
};
