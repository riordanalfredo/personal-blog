import React from 'react'

const MobileMenu = ({ open, children }) => {
  const styles = {
    menu: {
      width: '100%',
      height: '100vh',
      zIndex: 2,
      backgroundColor: 'var(--bg)',
      opacity: 'revert',
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      transition: '0.3s',
      transform: open ? 'translateX(0)' : 'translateX(-100%)',
    },
  }

  return <div style={styles.menu}>{children}</div>
}

export default MobileMenu
