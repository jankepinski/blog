import { Title } from "./components/title";
import { SectionTitle } from "./components/section-title";
import { Paragraph } from "./components/paragraph";
import { Box } from "@mui/material";
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

  const sections = post.body.content
    .filter((entry: any) => entry.nodeType === "heading-1")
    .map((entry: any) => entry.content[0].value);

  console.log(post.body.content);

  return (
    <>
      <Title title={post.title} subtitle={post.subtitle} />
      <Box sx={{ display: "flex", gap: 12 }}>
        <Box sx={{ flex: 2 }}>
          {post.body.content.map((entry: any, index: number) => {
            if (entry.nodeType === "heading-1") {
              return (
                <Section key={index} title={entry.content[0].value}>
                  <SectionTitle title={entry.content[0].value} />
                </Section>
              );
            }

            if (entry.nodeType === "paragraph" && !entry.content[0].marks[0]) {
              return <Paragraph key={index} text={entry.content[0].value} />;
            }

            if (
              entry.nodeType === "paragraph" && entry.content[0].marks[0].type === "code"
            ) {
              return <CodeBlock key={index} entry={entry} />;
            }
          })}
        </Box>
        <TableOfContents sections={sections} />
      </Box>
    </>
  );
}
