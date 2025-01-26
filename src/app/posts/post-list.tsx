import Link from "next/link";

export default function PostList(props) {
  return (
    <>
      <h1 className="text-2xl font-heading sm:text-4xl">Posts</h1>
      <br />
      <div>
        {props.data.postConnection.edges.map((post) => (
          <div key={post.node.id}>
            <Link href={`/posts/${post.node._sys.filename}`} className="font-heading underline">
              {post.node._sys.filename}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
