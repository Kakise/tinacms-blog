import Link from 'next/link'
import truncate from 'truncate'
import { format } from 'date-fns'
import { FaCalendar } from 'react-icons/fa'

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
      <br />
      <div>
        {(props.data.postConnection.edges ?? [])
          .filter((edge): edge is PostEdge & { node: PostNode } => !!edge?.node)
          .map((post) => (
            <div key={post.node.id}>
              <Link
                href={`/posts/${post.node._sys.filename}`}
                className="font-heading text-xl underline sm:text-xl"
              >
                {post.node.title ?? 'Untitled'}
              </Link>
              <p className="flex items-center gap-2">
                <FaCalendar />
                {post.node.date &&
                  format(new Date(post.node.date), 'MMMM dd, yyyy')}
              </p>
              <p>
                {truncate(
                  post.node.body?.children?.[0]?.children?.[0]?.text ?? '',
                  255,
                )}
              </p>
            </div>
          ))}
      </div>
    </>
  )
}
