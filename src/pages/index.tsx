import React, { useEffect, useState } from "react";
import DefaultTemplate from "@templates/default";
import SEO from "@components/SEO";
import RelatedPost from "@components/RelatedPost";
import Bio from "@components/Bio";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import RecentLog from "@components/RecentLog";

const Index = ({ data }: PageProps) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    setPosts((data as any).allMdx.edges);
  }, []);

  return (
    <DefaultTemplate>
      <SEO title="" />

      <Bio />

      <h2>Recent Posts</h2>
      {posts && <RelatedPost posts={posts} style={{ padding: 0 }} />}

      <h2>Recent Logs</h2>
      <RecentLog style={{ padding: 0 }} />
    </DefaultTemplate>
  );
};

export const relatedPostQuery = graphql`
  query RelatedPost {
    allMdx(
      limit: 3
      sort: { fields: [fields___date], order: DESC }
      filter: {
        fields: { type: { eq: "post" } }
        frontmatter: { draft: { ne: true } }
      }
    ) {
      edges {
        node {
          fields {
            date
            slug
          }
          frontmatter {
            title
            image
          }
        }
      }
    }
  }
`;

export default Index;
