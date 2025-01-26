import PostList from './post-list'
import { client } from '../../../tina/__generated__/client'
import { Input } from '@/components/input'


export default async function Page() {

  const pages = await client.queries.postConnection()

  return (
    <>
      <PostList home={false} {...pages} />
    </>
  )
}
