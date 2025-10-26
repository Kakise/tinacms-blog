import Post from './client-page'
import client from '@tina/client'
import { PageProps } from '@.next/app/posts/[...filename]/page'

export async function generateStaticParams() {
  const pages = await client.queries.postConnection()
  const paths = pages.data?.postConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }))

  return paths || []
}

export default async function PostPage({ params }: PageProps) {
  const { filename } = await params
  const data = await client.queries.post({
    relativePath: `${filename}.md`,
  })

  return <Post {...data}></Post>
}
