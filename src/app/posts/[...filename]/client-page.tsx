'use client'
import { tinaField, useTina } from 'tinacms/dist/react'
import type { PostQuery } from '../../../../tina/__generated__/types'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import type { Components } from 'tinacms/dist/rich-text'
import { Codeblock } from '@/components/code-block'
import { Mermaid } from '@/components/mermaid'
import { FaCalendar } from 'react-icons/fa'
import { format } from 'date-fns'
import { TinaTable } from '@/components/table'
import type { ReactNode } from 'react'

interface ClientPageProps {
  query: string
  variables: {
    relativePath: string
  }
  data: PostQuery
}

interface CodeBlockProps {
  lang: string
  value: string
}

interface MermaidProps {
  value: string
}

interface CodeProps {
  children: ReactNode
}

interface TableProps {
  children: ReactNode
}

const components: Components<{
  code_block: CodeBlockProps
  mermaid: MermaidProps
  code: CodeProps
  table: TableProps
}> = {
  code_block: (props) => {
    // @ts-expect-error The props are never undefined
    return <Codeblock language={props.lang}>{props.value}</Codeblock>
  },
  mermaid: (props) => {
    // @ts-expect-error The props are never undefined
    return <Mermaid>{props.value}</Mermaid>
  },
  code: (props) => {
    // @ts-expect-error The props are never undefined
    return <code className="bg-muted rounded-md p-1">{props.children}</code>
  },
  table: (props) => {
    // @ts-expect-error The props are never undefined
    return <TinaTable>{props.children}</TinaTable>
  },
}

export default function Post(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })
  const content = data.post.body
  return (
    <article>
      <h1 data-tina-field={tinaField(data.post, 'title')}>{data.post.title}</h1>
      <p
        className="flex items-center gap-2"
        data-tina-field={tinaField(data.post, 'date')}
      >
        <FaCalendar />
        {data.post.date
          ? format(new Date(data.post.date), 'MMMM dd, yyyy')
          : 'No date'}
      </p>
      <div data-tina-field={tinaField(data.post, 'body')}>
        <TinaMarkdown content={content} components={components} />
      </div>
    </article>
  )
}
