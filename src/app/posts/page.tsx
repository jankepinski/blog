import { Box, Typography } from "@mui/material";
import { Thumbnail } from "./components/thumbnail";
import { sofiaSans } from "../fonts";

const getPosts = async () => {
  const space_id = process.env.CONTENTFUL_SPACE_ID;
  const access_token = process.env.CONTENTFUL_ACCESS_TOKEN;

  const entries = await fetch(
    `https://cdn.contentful.com/spaces/${space_id}/environments/master/entries?access_token=${access_token}&content_type=blogPost`,
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
