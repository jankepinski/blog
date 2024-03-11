import { Title } from "./components/title";
import { SectionTitle } from "./components/section-title";
import { Paragraph } from "./components/paragraph";
import { Box, Typography } from "@mui/material";
import { TableOfContents } from "./components/table-of-contents";
import { Section } from "./components/section";
import { CodeBlock } from "./components/code-block";
import { envs } from "@/app/utils/envs/envs";

const getPost = async (slug: string) => {
  const post = await fetch(
    `https://cdn.contentful.com/spaces/${envs.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${envs.CONTENTFUL_ACCESS_TOKEN}&fields.slug=${slug}&content_type=blogPost`,
    { cache: "no-store" }
  )
    .then((res) => res.json())
    .then((res) => res.items[0].fields);

  post.body = await Promise.all(
    post.body.content.map(async (entry: any, index: number) => {
      if (entry.nodeType === "embedded-entry-block") {
        entry.content = (
          await fetch(
            `https://cdn.contentful.com//spaces/${envs.CONTENTFUL_SPACE_ID}/environments/master/entries/${entry.data.target.sys.id}?access_token=${envs.CONTENTFUL_ACCESS_TOKEN}&content_type=code`,
            { cache: "no-store" }
          ).then((res) => res.json())
        ).fields.code;
      }
      return entry;
    })
  );

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
      <Box sx={{ display: { sm: "block", md: "flex" }, gap: 12 }}>
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
