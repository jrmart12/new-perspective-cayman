import { client } from "../lib/sanityClient.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

// this was the previous way fetches were done but required more boilerplate on the frontend of queries
// so we are moving to the getSanityContent function below
// export function sanityGraphqlQuery(query) {
//     return `${import.meta.env.PUBLIC_SANITY_GRAPHQL_URL}?query=${query}`;
// }

export async function getSanityContent({ query, variables = {} }) {
  const { data } = await fetch(`${import.meta.env.PUBLIC_SANITY_GRAPHQL_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((response) => response.json());
  return data;
}

export function getSanityImageUrl(source) {
  return builder.image(source);
}
