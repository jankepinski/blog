import { Box, IconButton, Typography } from "@mui/material";
import { sofiaSans } from "../fonts";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "72px",
        top: 0,
        width: "100%",
        position: "sticky",
        backgroundColor: "#0E141B",
      }}
    >
      <Link href="/">
        <Typography
          variant="h4"
          sx={{ fontFamily: sofiaSans.style.fontFamily }}
        >
          kepinski.dev
        </Typography>
      </Link>

      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <Typography
            variant="body1"
            sx={{ mx: 2, fontFamily: sofiaSans.style.fontFamily }}
          >
            Home
          </Typography>
        </Link>
        <Link href="/posts">
          <Typography
            variant="body1"
            sx={{ mx: 2, fontFamily: sofiaSans.style.fontFamily }}
          >
            Posts
          </Typography>
        </Link>
        <Link href="/about">
          <Typography
            variant="body1"
            sx={{ mx: 2, fontFamily: sofiaSans.style.fontFamily }}
          >
            About
          </Typography>
        </Link>
        <Link href="/contact">
          <Typography
            variant="body1"
            sx={{ mx: 2, fontFamily: sofiaSans.style.fontFamily }}
          >
            Contact
          </Typography>
        </Link>
      </Box>
      <IconButton sx={{ display: { xs: "block", sm: "none" }, color: "white" }}>
        <MenuIcon />
      </IconButton>
    </Box>
  );
};
