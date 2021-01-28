/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import { useMediaQuery, getIsMobileBoolean } from '../utils/mobile'
import { rhythm } from '../utils/typography'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  const [width] = useMediaQuery()
  const isMobile = getIsMobileBoolean(width)

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        justifyContent: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 100,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start',
          maxWidth: 780,
        }}
      >
        <p className="bio" style={{ margin: 0 }}>
          Written by <strong>{author.name}</strong>
        </p>
        <small style={{ marginBottom: '0.5rem' }}>{author.summary}</small>
        <small>
          Connect with me on{' '}
          <a href={`https://linkedin.com/in/${social.linkedin}`}>LinkedIn</a>
          {', '}
          or you can find out more in <Link to="/about-me">About Me</Link>
        </small>
      </div>
    </div>
  )
}

export default Bio
