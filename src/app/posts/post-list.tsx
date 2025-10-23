import Link from 'next/link'
import truncate from 'truncate'
import { format } from 'date-fns'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar } from 'lucide-react'

interface PostNode {
  id: string
  title?: string | null
  date?: string | null
  body?: {
    children?: Array<{
      children?: Array<{
        text?: string | null
      }> | null
    }> | null
  } | null
  _sys: {
    filename: string
  }
}

interface PostEdge {
  node?: PostNode | null
}

interface PostListProps {
  home?: boolean
  data: {
    postConnection: {
      edges?: Array<PostEdge | null> | null
    }
  }
}

export default function PostList(props: PostListProps) {
  return (
    <>
      {!props.home && (
        <h1 className="font-heading text-2xl sm:text-4xl">Posts</h1>
      )}
      <div className="mt-8 grid gap-8">
        {(props.data.postConnection.edges ?? [])
          .filter((edge): edge is PostEdge & { node: PostNode } => !!edge?.node)
          .map((post) => (
            <Card className="w-full max-w-4xl transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none" key={post.node.id}>
              <CardHeader>
                <CardTitle>
                  <Link
                    href={`/posts/${post.node._sys.filename}`}
                    className="font-heading text-xl uppercase tracking-[0.15rem] sm:text-2xl"
                  >
                    {post.node.title ?? 'Untitled'}
                  </Link>
                </CardTitle>
                <CardDescription>
                  <span className="flex items-center gap-2 text-xl">
                    <Calendar />
                    {post.node.date
                      ? format(new Date(post.node.date), 'MMMM dd, yyyy')
                      : 'No date'}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                {truncate(
                  post.node.body?.children?.[0]?.children?.[0]?.text ?? '',
                  255,
                )}
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  )
}
