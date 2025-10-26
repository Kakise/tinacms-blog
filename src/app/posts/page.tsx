import PostList from './post-list'
import { client } from '@tina/client'
import { Card, CardContent } from '@/components/ui/card'
import { ReactNode } from 'react'

interface ClientPageSkeletonProps {
  children?: ReactNode
}

function ClientPageSkeleton(props: ClientPageSkeletonProps) {
  return (
    <Card className="w-full max-w-4xl">
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  )
}

export default async function Page() {
  const posts = await client.queries.postConnection()

  return (
    <ClientPageSkeleton>
      <h2>Latest blog posts</h2>
      <PostList home={true} {...posts} />
    </ClientPageSkeleton>
  )
}
