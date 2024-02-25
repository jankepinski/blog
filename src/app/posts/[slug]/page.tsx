import { Title } from "./components/title";
import { SectionTitle } from "./components/section-title";
import { Paragraph } from "./components/paragraph";
import { Box, Typography } from "@mui/material";
import { TableOfContents } from "./components/table-of-contents";
import { Section } from "./components/section";
import { CodeBlock } from "./components/code-block";

const getPost = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  const post = await res.json();
  return post;
};

export default async function Post({ params }: any) {
  const slug = params.slug;

  const post = await getPost(slug);

  const sections = post.body
    .filter((entry: any) => entry.nodeType === "heading-1")
    .map((entry: any) => entry.content[0].value);

  return (
    <>
      <Title title={post.title} subtitle={post.subtitle} />
      <Box sx={{ display: "flex", gap: 12 }}>
        <Box sx={{ flex: 2 }}>
          {post.body.map((entry: any, index: number) => {
            if (entry.nodeType === "heading-1") {
              return <Section key={index} title={entry.content[0].value} />;
            }

            if (entry.nodeType === "paragraph") {
              return entry.content
                .filter((entry: any) => entry.nodeType === "text")
                .map((content: any, index: number) => {
                  return <Paragraph key={index} text={content.value} />;
                });
            }
            if (entry.nodeType === "embedded-entry-block") {
              return <CodeBlock key={index} code={entry.content} />;
            }
          })}
        </Box>
        <TableOfContents sections={sections} />
      </Box>
    </>
  );
}
