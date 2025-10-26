import { defineConfig } from 'tinacms'
import nextConfig from '../next.config'
import Page from './collections/page'
import Post from './collections/post'

const config = defineConfig({
  clientId: process.env.TINA_CLIENT_ID!,
  branch: 'main',
  token: process.env.TINA_TOKEN!,
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public",
    outputFolder: "admin",
    basePath: nextConfig.basePath?.replace(/^\//, '') || '',
  },
  schema: {
    collections: [Page, Post],
  },
});

export default config;
