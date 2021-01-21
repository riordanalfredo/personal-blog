import React from 'react'
import AdSense from 'react-adsense'

const Ads = () => {
  const style = {
    textAlign: 'center',
    margin: '2rem 0',
  },

  return (
    <div style={style}>
      <small>
        I attached a small advertisement below to support this blog. Thank you
        for visiting 🙏
      </small>
      <AdSense.Google
        client={process.env.GATSBY_ADSENSE_CLIENT_ID}
        slot="6679828929"
        style={{ display: 'block' }}
        format="auto"
        responsive="true"
      />
    </div>
  )
}

export default Ads
