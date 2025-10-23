import PostList from './post-list'
import { client } from '../../../tina/__generated__/client'
import { ClientPageSkeleton } from '@/app/[...filename]/client-page'

export default async function Page() {
  const posts = await client.queries.postConnection()

  return (
    <ClientPageSkeleton>
      <h2>Latest blog posts</h2>
      <PostList home={true} {...posts} />
    </ClientPageSkeleton>
  )
}
