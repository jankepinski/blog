"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { sofiaSans } from "../../fonts";
import {
  StepConnector,
  StepIconProps,
  stepConnectorClasses,
  styled,
} from "@mui/material";
import { Check } from "@mui/icons-material";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
  },
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#784af4",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#784af4",
      zIndex: 1,
      fontSize: 18,
      marginLeft: 4,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
      marginLeft: 8,
      marginRight: 8,
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const steps = [
  { label: "Self learning", description: "2018-2020" },
  { label: "Private projects", description: "2020-2023" },
  {
    label: "Junior Frontend Developer at Boldare",
    description: "2023-present",
  },
  { label: "Developer at your company?", description: "future" },
];

export const ExperienceStepper = () => {
  return (
    <Stepper
      activeStep={2}
      orientation="vertical"
      connector={<QontoConnector />}
      sx={{flex: 1}}
    >
      {steps.map((step, index) => {
        return (
          <Step key={index}>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "24px",
                }}
                className={sofiaSans.className}
              >
                {step.label}
              </Typography>
              <Typography
                sx={{ color: "lightgray" }}
                className={sofiaSans.className}
              >
                {step.description}
              </Typography>
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};
