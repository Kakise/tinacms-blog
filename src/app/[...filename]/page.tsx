import ClientPage from "./client-page";
import client from "../../../tina/__generated__/client";

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

export default async function Page(page: any) {
  const data = await client.queries.page({
    relativePath: `${await page.params.filename}.mdx`,
  });

  return <ClientPage {...data} />;
}
