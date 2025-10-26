import type { Collection } from 'tinacms';

const Post: Collection = {
  label: 'Blog Posts',
  name: 'post',
  path: 'content/post',
  format: 'mdx',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
    {
      type: 'datetime',
      label: 'Date',
      name: 'date',
    },
    {
      type: 'rich-text',
      label: 'Blog Post Body',
      name: 'body',
      isBody: true,
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`
    },
  },
}

export default Post;