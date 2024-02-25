import { Box, IconButton, Typography } from "@mui/material";
import { sofiaSans } from "../fonts";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';

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
          backgroundColor: "#0E141B"
        }}
      >
        <Typography variant="h4" className={sofiaSans.className}>
          kepinski.dev
        </Typography>
        <Box
          sx={{
            display: {xs: "none", sm: "flex"},
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <Typography
              variant="body1"
              className={sofiaSans.className}
              sx={{ mx: 2 }}
            >
              Home
            </Typography>
          </Link>
          <Link href="/posts">
            <Typography
              variant="body1"
              className={sofiaSans.className}
              sx={{ mx: 2 }}
            >
              Posts
            </Typography>
          </Link>
          <Link href="/about">
            <Typography
              variant="body1"
              className={sofiaSans.className}
              sx={{ mx: 2 }}
            >
              About
            </Typography>
          </Link>
          <Link href="/contact">
            <Typography
              variant="body1"
              className={sofiaSans.className}
              sx={{ mx: 2 }}
            >
              Contact
            </Typography>
          </Link>
        </Box>
        <IconButton sx={{display: {xs: "block", sm: "none"}, color: "white"}}>
          <MenuIcon />
        </IconButton>
      </Box>
  );
};
