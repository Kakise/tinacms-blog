import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { useTheme } from '@/components/theme-provider'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Codeblock = ({
  children,
  language,
}: {
  children: string
  language: string
}) => {
  const {theme} = useTheme()
  return (
    <SyntaxHighlighter language={language || 'jsx'} style={ theme === "dark" ? oneDark: oneLight}>
      {children}
    </SyntaxHighlighter>
  )
}

export { Codeblock }
