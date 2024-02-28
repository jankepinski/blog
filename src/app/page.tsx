import { Box, Button, Container, Typography } from "@mui/material";
import { sofiaSans } from "./fonts";
import Image from "next/image";
import myimg from "./assets/svg/developer-team.svg";
import { StyledButton } from "./components/styled-button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column-reverse", lg: "row" },
          mt: { xs: 5, lg: 15 },
        }}
      >
        <Box>
          <Typography
            className={sofiaSans.className}
            sx={{ fontSize: {xs: "36px", sm:"48px"}, textAlign: { xs: "center", lg: "start" } }}
          >
            Hello, my name is Jan!
          </Typography>
          <Typography
            className={sofiaSans.className}
            sx={{
              fontSize: {xs: "28px", sm: "32px"},
              mt: -1,
              textAlign: { xs: "center", lg: "start" },
            }}
          >
            Im a professional fullstack developer.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: { xs: 4, lg: 20 },
            }}
          >
            <Link href="/posts">
              <StyledButton>Posts</StyledButton>
            </Link>
            <Link href="/about">
              <StyledButton>About me</StyledButton>
            </Link>
          </Box>
        </Box>
        <Box sx={{ width: { sm: "80%", md: "60%", lg: "50%" } }}>
          <Image
            src={myimg}
            alt="web development illustration"
            width={600}
            height={600}
            layout="responsive"
          />
        </Box>
      </Box>
    </>
  );
}
