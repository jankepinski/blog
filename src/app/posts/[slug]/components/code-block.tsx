import { Box } from "@mui/material";
import { Roboto_Mono } from "next/font/google";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const RobotoMono = Roboto_Mono({ subsets: ["latin"] });

export const CodeBlock = async ({ code }: any) => {
  return (
    <SyntaxHighlighter language="tsx" style={oneDark}>
      {code}
    </SyntaxHighlighter>
  );
};
