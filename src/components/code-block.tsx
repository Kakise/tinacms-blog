import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark'

const Codeblock = ({
  children,
  language,
}: {
  children: string
  language: string
}) => {
  return (
    <SyntaxHighlighter language={language || 'jsx'} style={atomOneDark}>
      {children}
    </SyntaxHighlighter>
  )
}

export { Codeblock }
