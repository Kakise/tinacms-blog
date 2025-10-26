'use client'
import { tinaField, useTina } from 'tinacms/dist/react'
import type { PostQuery } from '@tina/types'
import { format } from 'date-fns'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Calendar } from 'lucide-react'
import MDXRender from '@/components/mdx-render'

interface ClientPageProps {
  query: string
  variables: {
    relativePath: string
  }
  data: PostQuery
}

export default function Post(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })
  const content = data.post.body
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle data-tina-field={tinaField(data.post, 'title')}><h1>{data.post.title}</h1></CardTitle>
        <CardDescription
          data-tina-field={tinaField(data.post, 'date')}
        >
          <span className="flex items-center gap-2 text-xl">
            <Calendar />
            {data.post.date
              ? format(new Date(data.post.date), 'MMMM dd, yyyy')
              : 'No date'}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <MDXRender content={content}/>
      </CardContent>
    </Card>
  )
}
