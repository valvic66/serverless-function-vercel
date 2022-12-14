import { GraphQLClient, gql } from 'graphql-request';

async function getAllBlogs() {
  const client = new GraphQLClient(
    'https://api-eu-central-1.hygraph.com/v2/cl7qpydxj5mv601t78887184a/master'
  );
  const query = gql`
    query allBlogs {
      blogModels {
        id
        slug
        title
        subheading
        tags
        content {
          html
          markdown
        }
        bannerImage {
          height
          size
          width
          url
          fileName
        }
        date
      }
    }
  `;

  return await client.request(query);
}

export default async function handler(request, response) {
  const data = await getAllBlogs();
  console.log(data);

  response.status(200).json({
    person: {
      name: 'Valentin',
      age: 20,
    },
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}
