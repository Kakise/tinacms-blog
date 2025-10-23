import ClientPage from './client-page'
import client from '../../../tina/__generated__/client'
import { PageProps } from '../../../.next/types/app/[...filename]/page'
import PostList from '../posts/post-list'

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection()
  const paths = pages.data?.pageConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }))

  return paths || []
}

export default async function Page({ params }: PageProps) {
  const { filename } = await params
  const data = await client.queries.page({
    relativePath: `${filename}.mdx`,
  })

  console.log(filename)

  if (filename[0] !== 'home') {
    return <ClientPage {...data} />
  } else {
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
}
