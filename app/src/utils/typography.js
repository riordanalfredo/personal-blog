import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => {
  return {
    a: {
      color: 'var(--textLink)',
      boxShadow: 'none',
      transition: '0.3s',
    },
    'a:hover': {
      color: 'var(--hover)',
      boxShadow: '0px 6px 13px 2px rgba(0, 0, 0, 0.25)',
      textDecoration: 'none',
      textShadow:
        '1px 1px 0 var(--bg), -1px 1px 0 var(--bg), 2px 0 0 var(--bg), -2px 0 0 var(--bg)',
      boxShadow: 'inset 0 -1px 0 0 var(--bg), inset 0 -3px 0 0 var(--hover)',
    },
    // gatsby-remark-autolink-headers - don't underline when hidden
    'a.anchor': {
      boxShadow: 'none',
    },
    // gatsby-remark-autolink-headers - use theme colours for the link icon
    'a.anchor svg[aria-hidden="true"]': {
      stroke: 'var(--textLink)',
    },
    hr: {
      background: 'var(--hr)',
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
