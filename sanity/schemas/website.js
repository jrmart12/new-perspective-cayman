export default {
  name: "website",
  title: "Website",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Main Title",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
