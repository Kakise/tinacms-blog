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
      <div className="mt-8 grid gap-8">
        {(props.data.postConnection.edges ?? [])
          .filter((edge): edge is PostEdge & { node: PostNode } => !!edge?.node)
          .map((post) => (
            <div
              key={post.node.id}
              className="border-border bg-bw shadow-[8px_8px_0_0_var(--shadow-color)] border-4 px-5 py-6 transition-transform hover:-translate-y-[2px]"
            >
              <Link
                href={`/posts/${post.node._sys.filename}`}
                className="font-heading text-xl uppercase tracking-[0.15rem] sm:text-2xl"
              >
                {post.node.title ?? 'Untitled'}
              </Link>
              <p className="mt-3 flex items-center gap-2 text-sm uppercase tracking-[0.2rem]">
                <FaCalendar className="text-main" />
                {post.node.date &&
                  format(new Date(post.node.date), 'MMMM dd, yyyy')}
              </p>
              <p className="mt-4 text-base">
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
