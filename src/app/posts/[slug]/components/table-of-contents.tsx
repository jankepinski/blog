import { sofiaSans } from "@/app/fonts";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

type TableOfContentsProps = {
  sections: string[];
};

export const TableOfContents = ({ sections }: TableOfContentsProps) => {
  return (
    <Box
      sx={{
        flex: 1,
        position: "sticky",
        top: 100,
        border: "2px solid #213041",
        borderRadius: 4,
        display: {xs: "none", md: "flex"},
        alignItems: "baseline",
        flexDirection: "column",
        p: 2,
        gap: 1,
        alignSelf: "flex-start",
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          letterSpacing: 2,
          alignSelf: "center",
          mb: 1,
          fontFamily: sofiaSans.style.fontFamily
        }}
      >
        Table Of Contents
      </Typography>
      {sections.map((title, index) => {
        return (
          <Link href={`#${title.replace(/ /g, "-")}`} key={index}>
            <Typography sx={{fontFamily: sofiaSans.style.fontFamily}}>{title}</Typography>
          </Link>
        );
      })}
    </Box>
  );
};
