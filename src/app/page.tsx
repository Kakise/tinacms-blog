import ClientPage from './[...filename]/client-page'
import client from '../../tina/__generated__/client'
import PostList from './posts/post-list'

export const dynamic = 'error' // ensure static export

export default async function IndexPage() {
  // Fetch the 'home' page and latest posts like [...filename]/page.tsx would when filename === 'home'
  const data = await client.queries.page({
    relativePath: `home.mdx`,
  })

  const posts = await client.queries.postConnection({
    last: 5,
  })

  return (
    <ClientPage {...data}>
      <h2>Latest blog posts</h2>
      <PostList home={true} {...posts} />
    </ClientPage>
  )
}
