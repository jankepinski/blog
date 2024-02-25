import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBlock = async ({ code }: any) => {
  return (
    <SyntaxHighlighter language="tsx" style={oneDark}>
      {code}
    </SyntaxHighlighter>
  );
};
