import React from 'react'
import SocialMedia from '../../components/social-media'
import { ImWhatsapp as WA } from '@react-icons/all-files/im/ImWhatsapp'
import { MdEmail as Email } from '@react-icons/all-files/md/MdEmail'
import { FaLinkedinIn as LinkedIn } from '@react-icons/all-files/fa/FaLinkedinIn'
import { ImGithub as Github } from '@react-icons/all-files/im/ImGithub'
import { useMediaQuery, getIsMobileBoolean } from '../../utils/mobile'

const SocialMediaContainer = () => {
  let uri = 'Hello from /me website'
  const res = encodeURI(uri)
  const [width] = useMediaQuery()
  const isMobile = getIsMobileBoolean(width)

  const data = [
    {
      text: 'Email',
      link: 'mailto:riordan.alfredo@gmail.com',
      icon: <Email size={isMobile ? 40 : 70} />,
    },
    {
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/riordan-alfredo/',
      icon: <LinkedIn size={isMobile ? 40 : 70} />,
    },
    {
      text: ' WhatsApp',
      link: `https://wa.me/61449091145/?text=${res}`,
      icon: <WA size={isMobile ? 40 : 70} />,
    },
    {
      text: 'Github',
      link: 'https://github.com/riordanalfredo?tab=repositories',
      icon: <Github size={isMobile ? 40 : 70} />,
    },
  ]

  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: isMobile ? '1rem' : '5rem',
      textAlign: 'center',
      marginTop: '3vh',
    },
  }
  return (
    <div className={'contact-temp'}>
      <div style={styles.grid}>
        {data.map((d, index) => (
          <SocialMedia key={index} data={d} />
        ))}
      </div>
    </div>
  )
}
export default SocialMediaContainer
