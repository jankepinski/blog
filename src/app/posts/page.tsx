import { Box, Typography } from "@mui/material";
import { Thumbnail } from "./components/thumbnail";
import { sofiaSans } from "../fonts";
import { envs } from "../utils/envs/envs";

const getPosts = async () => {
  const entries = await fetch(
    `https://cdn.contentful.com/spaces/${envs.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${envs.CONTENTFUL_ACCESS_TOKEN}&content_type=blogPost`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const posts = entries.items.map((entry: any) => {
    return {
      title: entry.fields.title,
      subtitle: entry.fields.subtitle,
      description: entry.fields.description,
      slug: entry.fields.slug,
    };
  });

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
          fontFamily: sofiaSans.style.fontFamily,
        }}
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
