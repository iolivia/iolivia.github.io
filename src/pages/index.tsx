import * as React from 'react'
import styled from "styled-components"
import { graphql } from 'gatsby'

import PostPreview from '../components/PostPreview';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        logo: string,
        title: string,
        description: string,
        tagline: string,
        footerLinks: Map<string, string>,
        socialLinks: Map<string, string>,
        settings: {
          animationsEnabled: boolean
        }
      },
    },
    allMarkdownRemark: {
      edges: {
        node: {
          excerpt: string,
          frontmatter: {
            date: string,
            title: string
          }
        }
      }
    }
  }
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
          title
          description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            featuredImage {
              childImageSharp{
                sizes(maxWidth: 230, maxHeight: 230) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`

const SectionHeading = styled.h1`
  color: #f7484e;
`;

const SectionContainer = styled.div`
  padding-top: 35px;
`;

const Section = props => (
  <SectionContainer id={props.id}>
    <SectionHeading>{props.heading}</SectionHeading>
    {props.children}
  </SectionContainer>
);

export default class IndexPage extends React.Component<IndexPageProps, {}> {

  public render() {
    const posts: any[] = this.props.data.allMarkdownRemark.edges;
    const siteMetadata = this.props.data.site.siteMetadata;

    return (
      <Layout>

        <SEO
          title={siteMetadata.title}
          description={siteMetadata.description}
        />

        <Section id="about" heading="About">
          <div dangerouslySetInnerHTML={{ __html: siteMetadata.description }} />
        </Section>

        <Section id="blog" heading="Blog">

          <ul>
            {this.buildPostList(posts)}
          </ul>

        </Section>

        <Section id="contact" heading="Contact">

          If you'd like to reach out, please do so at&nbsp;
        <strong>
            <a href="mailto:olivia_github@outlook.com">
              olivia_github@outlook.com
          </a>
          </strong>
          .
        </Section>

      </Layout>
    );
  }

  private buildPostList = (posts: any[]) => {
    const postElements = [];

    for (const item of posts) {
      const post = item.node;

      postElements.push((
        <PostPreview
          imageSizes={post.frontmatter.featuredImage.childImageSharp.sizes}
          title={post.frontmatter.title}
          excerpt={post.excerpt}
          url={post.fields.slug}
          date={post.frontmatter.date}
        />
      ));
    }

    return postElements;
  }
}