'use client'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {oneDark, oneLight} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {useTheme} from '@/components/theme-provider'

export function Codeblock({children, language}: {children: string; language: string}) {
  const {theme} = useTheme()
  return (
    <SyntaxHighlighter language={language || 'text'} style={theme === 'dark' ? oneDark : oneLight}>
      {children}
    </SyntaxHighlighter>
  )
}
