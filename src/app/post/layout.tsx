import { Container } from "@mui/material";
import { Navbar } from "../components/navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <Container>
        <Navbar />
        <main>{children}</main>
      </Container>
    </>
  );
}
