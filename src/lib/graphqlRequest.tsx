// GraphQL queries for fetching blog data with pagination

const endpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT || "";
export const GET_ALL_POSTS = `query AllPosts {
  posts(where: {status: PUBLISH}) {
    nodes {
      categories {
        nodes {
          id
          name
        }
      }
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      featuredPost {
        featuredPost
        fieldGroupName
      }
      title
        content(format: RENDERED)
      excerpt(format: RENDERED)
      slug
      id
      readingTime
           date
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}`;
export const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      content
      date
         readingTime
    }
  }
`;
export const GET_JDS = `query JobBySlug {
  jobs(where: {status: PUBLISH}) {
    nodes {
      content
      excerpt(format: RENDERED)
      slug
      title
      jobDescriptions {
        experience
      }
    }
  }
}`;

// lib/graphqlRequest.ts

export const GET_JDS_BY_SLUG = `
   query GetJobDataBySlug($slug: String!) {
          jobs(where: { slug: $slug, status: PUBLISH }) {
            nodes {
              slug
              title
              id
              content
            }
          }
        }
`;

export const GET_NEWS = `query News {
  newsletters {
    nodes {
      groupforNews {
        content
        link {
          url
        }
        month
        year
        date
      }
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
    }
  }
}`;
