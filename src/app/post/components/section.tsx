import { SectionTitle } from "./section-title";

type SectionProps = {
  children: any;
  title: string;
};

export const Section = ({ children, title }: SectionProps) => {
  return (
    <>
      <section id={title.replace(/ /g, "-")} style={{position: "relative", bottom: "100px"}} />
      <SectionTitle title={title} />
      {children}
    </>
  );
};
