import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { SEO, Layout } from "../components/elements"
import { StyledPage, Link } from "../components/styles"

const StyledPost = styled(StyledPage)`
  max-width: var(--container);

  .post-date {
    font-family: var(--mono);
  }

  .post-title {
    font-weight: 900;
  }

  .post-description {
    font-style: italic;
  }

  .next-prev-title {
    font-weight: 900;
  }
`

export default function PostTemplatePage({ data, pageContext, location }) {
  const post = data.markdownRemark
  const { next, previous } = pageContext

  return (
    <Layout location={location}>
      <StyledPost>
        <SEO title={post.frontmatter.title} />
        <small className="post-date">{post.frontmatter.date}</small>
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <p className="post-description">{post.frontmatter.description}</p>
        <br />
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <br />
        <div className="next-prev-links">
          {next && (
            <Link to={`/${next.fields.slug}`}>
              <h3 className="next-prev-title">{next.frontmatter.title}</h3>
            </Link>
          )}
          {previous && (
            <Link to={`/${previous.fields.slug}`}>
              <h3 className="next-prev-title">{previous.frontmatter.title}</h3>
            </Link>
          )}
        </div>
      </StyledPost>
    </Layout>
  )
}

export const pageQuery = graphql`
  query POST_MARKDOWN_QUERY($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...PostFragment
    }
  }
`
