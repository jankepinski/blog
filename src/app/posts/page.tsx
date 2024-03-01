import { Box, Typography } from "@mui/material";
import { Thumbnail } from "./components/thumbnail";
import { sofiaSans } from "../fonts";

const getPosts = async () => {
  const res = await fetch(`${window.location.origin}/api/posts`, {
    cache: "no-store",
  });
  const posts = await res.json();
  return posts;
};

export default async function Posts() {
  const posts = await getPosts();

  return (
    <>
      <Typography
        sx={{
          mt: { xs: 8, md: 12 },
          ml: { xs: 4, sm: 6, md: 6 },
          mb: 4,
          fontSize: "32px",
          fontWeight: "800",
        }}
        className={sofiaSans.className}
      >
        Posts:
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(auto-fill, 1fr)",
            md: "repeat(auto-fill, minmax(500px, 1fr))",
          },
          rowGap: "64px",
          justifyItems: "center",
        }}
      >
        {posts.map((post: any, index: number) => (
          <Thumbnail
            key={index}
            title={post.title}
            subtitle={post.subtitle}
            description={post.description}
            slug={post.slug}
          />
        ))}
      </Box>
    </>
  );
}
