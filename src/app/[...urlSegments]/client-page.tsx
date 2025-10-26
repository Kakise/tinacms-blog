'use client'
import { tinaField, useTina } from 'tinacms/dist/react'
import type { PageQuery } from '@tina/types'
import MDXRender from '@/components/mdx-render'
import { Card, CardContent } from '@/components/ui/card'
import { ReactNode } from 'react'



interface ClientPageSkeletonProps {
  children?: ReactNode
}

interface ClientPageProps{
  query: string
  variables: {
    relativePath: string
  }
  data: { page: PageQuery['page'] }
  children?: ReactNode
}

export function ClientPageSkeleton(props: ClientPageSkeletonProps) {
  return (
    <Card className="w-full max-w-4xl">
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  )
}

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const content = data.page.body
  return (
    <ClientPageSkeleton>
      <div data-tina-field={tinaField(data.page, 'body')}>
        <MDXRender content={content} />
      </div>
      {props.children}
    </ClientPageSkeleton>
  )
}
