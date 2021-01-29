import React from 'react'

export const data = [
  {
    text: 'Leonids, Gatsby template',
    comment: 'The basis of this blog application',
    link: 'https://www.gatsbyjs.com/starters/renyuanz/leonids',
  },
  {
    text: 'Celine A. Elias',
    comment:
      'She assists me in reviewing the overall user interface of this blog',
    link:
      ' https://www.linkedin.com/in/celine-alandia-elias/?originalSubdomain=au',
  },
  {
    text: 'A Guide to Flexbox',
    comment: 'quick reference to ',
    link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
  },
  {
    text: 'How to create 3-column layout',
    comment: '',
    link:
      'https://stackoverflow.com/questions/58277981/how-to-create-a-3-column-layout-structure-in-react-js',
  },
  {
    text: 'Better looking underlined links with CSS3',
    comment: '',
    link:
      'https://walterebert.com/blog/underlined-links-css3-box-shadow-text-shadow/',
  },
  {
    text: 'React-Netlify-Forms',
    comment: '',
    link:
      'https://pyrax.github.io/react-netlify-forms/examples/react-hook-form/',
  },
  {
    text: 'Hamburger Menu',
    comment: '',
    link:
      'https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/',
  },
]

const CreditSection = () => {
  const outerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 20,
    // justifyItems: 'center',
  }
  return (
    <div>
      <h3 style={{ color: 'var(--textTitle)' }}>Credits/References </h3>
      <div style={outerStyle}>
        {data.map((d, index) => {
          return (
            <div key={index}>
              <span role="img" aria-label="sloth emoji">
                🦥
              </span>{' '}
              <a href={d.link}>{d.text}</a>
              <br />
              <small>{!!d.comment ? d.comment : ''}</small>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CreditSection
