import * as React from "react";
import Box from "@mui/material/Box";
import { ExperienceStepper } from "./components/experience-stepper";
import { TechStack } from "./components/tech-stack";
import { Button } from "@mui/material";
import { StyledButton } from "../components/styled-button";
import Link from "next/link";

export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        gap: "100px",
        mt: { xs: "60px", md: "200px" },
      }}
    >
      <ExperienceStepper />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "80px",
        }}
      >
        <TechStack />
        <Link href="/contact">
          <StyledButton>Contact</StyledButton>
        </Link>
      </Box>
    </Box>
  );
}
