import dayjs from "dayjs";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface RecentLogProps {
  style?: React.CSSProperties;
}

dayjs.extend(require("dayjs/plugin/localizedFormat"));

const RecentLog = ({ style }: RecentLogProps) => {
  const result = useStaticQuery(graphql`
    {
      allMdx(
        limit: 6
        sort: { fields: [fields___date], order: DESC }
        filter: { fields: { type: { eq: "log" } } }
      ) {
        edges {
          node {
            fields {
              date
              year
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      {result.allMdx.edges.map((post: any) => (
        <div className="posts" key={post.node.fields.slug}>
          <a href={post.node.fields.slug}>{post.node.frontmatter.title}</a>
          <span className="post-date">
            <i className="fa fa-calendar" aria-hidden="true" />{" "}
            {dayjs(post.node.fields.date).locale("en").format("LL")}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentLog;
