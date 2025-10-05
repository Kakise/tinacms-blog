/**
 * @type {import('tinacms').Collection}
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  label: 'Blog Posts',
  name: 'post',
  path: 'content/post',
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
