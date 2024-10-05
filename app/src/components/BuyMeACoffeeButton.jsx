import { navigate } from 'gatsby'
import React from 'react'
import { Button } from 'react-bootstrap'
import bmc from '../assets/bmc-full-logo-no-background.png'

const BuyMeACoffeeButton = () => {
  return (
    <div
      style={{
        marginTop: '1em',
        color: 'var(--textTitle)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      Considering supporting my work? You can:
      <Button
        variant="outline-light"
        style={{
          marginLeft: '0.5em',
          cursor: 'pointer',
          padding: '0.5rem',
          justifyContent: 'center',
          color: 'var(--shadow)',
          backgroundColor: 'var(--textNormal)',
          borderRadius: '0.5rem',
        }}
        onClick={() => {
          navigate('https://www.buymeacoffee.com/riordanalfb')
        }}
      >
        <img src={bmc} width={'120em'} style={{ marginBottom: 0 }} />
        {/* ☕️ Buy Me A Coffee */}
      </Button>
    </div>
  )
}

export default BuyMeACoffeeButton
