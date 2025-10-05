import Link from 'next/link'
import truncate from 'truncate'
import { format } from 'date-fns'
import { FaCalendar } from 'react-icons/fa'

export default function PostList(props: any) {
  return (
    <>
      {!props.home && (
        <h1 className="font-heading text-2xl sm:text-4xl">Posts</h1>
      )}
      <br />
      <div>
        {props.data.postConnection.edges.map((post: any) => (
          <div key={post.node.id}>
            <Link
              href={`/posts/${post.node._sys.filename}`}
              className="font-heading text-xl underline sm:text-xl"
            >
              {post.node.title}
            </Link>
            <p className="flex items-center gap-2">
              <FaCalendar />
              {format(new Date(post.node.date), 'MMMM dd, yyyy')}
            </p>
            <p>{truncate(post.node.body.children[0].children[0].text, 255)}</p>
          </div>
        ))}
      </div>
    </>
  )
}
