import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { researchArticles } from '../assets/research'
import BuyMeACoffeeButton from '../components/BuyMeACoffeeButton'

const ResearchPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const styles = {
    outer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      wordWrap: 'break-word',
    },
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Research Outputs" />
      <div style={styles.outer}>
        <h1>RESEARCH</h1>
        <p>My published articles (first-author):</p>
        <ul>
          {researchArticles.map(article => {
            return (
              <li>
                <a href={`/pdfs/${article.pdf}`} target="_blank">
                  {article.title} ({article.publisher})
                </a>
              </li>
            )
          })}
        </ul>
        <h1>TOOLS</h1>
        <p>
          I will share practical tools that can help you understand learning
          process and teaching practices. Currently, it is still under
          development. Stay tuned!
        </p>
        <BuyMeACoffeeButton />
      </div>
    </Layout>
  )
}

export default ResearchPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
