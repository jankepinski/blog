import { Title } from "./components/title";
import { SectionTitle } from "./components/section-title";
import { Paragraph } from "./components/paragraph";
import { Box } from "@mui/material";
import { TableOfContents } from "./components/table-of-contents";
import { Section } from "./components/section";

const sections = ["Hello world", "Hello world 2", "Hello world 3", "Hello world 4", "Hello world 5", "Hello world 6", "Hello world 7", "Hello world 8", "Hello world 9", "Hello world 10", "Hello world 11", "Hello world 12", "Hello world 13", "Hello world 14", "Hello world 15", "Hello world 16", "Hello world 17", "Hello world 18", "Hello world 19", "Hello world 20"];

export default function Post() {
  return (
    <>
      <Title
        title="Hello, World!"
        subtitle="This is a simple Next.js app with MUI and Google Fonts."
      />
      <Box sx={{ display: "flex", gap: 12 }}>
        <Box sx={{ flex: 2 }}>
          {sections.map((title, index) => {
            return (
              <Section key={index} title={title}>
                <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum viverra tincidunt. Cras luctus aliquam purus, nec tincidunt lacus porttitor et. Ut nec dolor vel metus gravida accumsan. Ut volutpat turpis non nisi mollis, ut condimentum eros consectetur. Etiam diam dolor, ullamcorper at est id, dapibus iaculis tortor. Etiam fermentum tellus et dolor ultrices feugiat. Suspendisse nec sagittis sapien. Proin ut augue ut dui pulvinar imperdiet in at velit. Aliquam vitae libero lectus. Sed at congue neque. Maecenas ac libero nisl. Phasellus vel lorem et metus pulvinar dapibus at et ante. Donec nec massa in sapien commodo ullamcorper at eu dolor." />
              </Section>
            );
          })}
        </Box>
        <TableOfContents sections={sections} />
      </Box>
    </>
  );
}
