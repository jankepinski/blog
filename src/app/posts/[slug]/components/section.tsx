import { SectionTitle } from "./section-title";

type SectionProps = {
  title: string;
};

export const Section = ({ title }: SectionProps) => {
  return (
    <>
      <section id={title.replace(/ /g, "-")} style={{position: "relative", bottom: "100px"}} />
      <SectionTitle title={title} />
    </>
  );
};
