import React from 'react'
import { navigate } from 'gatsby'
import { Button } from 'react-bootstrap'
import { FiChevronLeft as LeftArrow } from '@react-icons/all-files/fi/FiChevronLeft'

const BackButton = () => {
  const styles = {
    backButton: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '1rem',
      position: 'fixed',
      borderRadius: '10px',
      width: '6rem',
      height: '2.5rem',
      justifyContent: 'center',
      backgroundColor: 'var(--shadow)',
      opacity: '0.9',
      transition: '0.3s',
      zIndex: '30',
      top: 70,
    },
  }

  return (
    <Button
      id="backButton"
      style={styles.backButton}
      onClick={() => navigate('/')}
    >
      <LeftArrow />
      <small>GO BACK</small>
    </Button>
  )
}

export default BackButton
