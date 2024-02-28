import { Button } from "@mui/material";

export const StyledButton = ({ children }: any) => {
  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: "1",
        textDecoration: "none",
        textTransform: "none",
        color: "#fff",
        fontSize: "18px",
        borderRadius: "0px",
        width: { xs: "160px", sm: "200px"},
        height: "40px",
        fontWeight: "bold",
        border: "2px solid #213041",
        transition: "0.3s",
        boxShadow: "5px 5px 0px 0px #213041",
        backgroundColor: "#5C85B4",
        ":hover": {
          boxShadow: "0 0 #333",
          backgroundColor: "#213041",
        },
      }}
    >
      {children}
    </Button>
  );
};
