import React from 'react'
import { ImWhatsapp as WA } from '@react-icons/all-files/im/ImWhatsapp'
import { MdEmail as Email } from '@react-icons/all-files/md/MdEmail'
import { FaLinkedinIn as LinkedIn } from '@react-icons/all-files/fa/FaLinkedinIn'
import { ImGithub as Github } from '@react-icons/all-files/im/ImGithub'

const SocialMedia = () => {
  let uri = 'Hello from /me website'
  const res = encodeURI(uri)

  const data = [
    {
      text: 'Email me',
      link: 'mailto:riordan.alfredo@gmail.com',
      icon: <Email size={70} />,
    },
    {
      text: 'Connect me in LinkedIn',
      link: 'https://www.linkedin.com/in/riordan-alfredo/',
      icon: <LinkedIn size={70} />,
    },
    {
      text: 'Chat in WhatsApp',
      link: `https://wa.me/61449091145/?text=${res}`,
      icon: <WA size={70} />,
    },
    {
      text: 'Check my repository',
      link: 'https://github.com/riordanalfredo?tab=repositories',
      icon: <Github size={70} />,
    },
  ]

  return (
    <div className={'contact-temp'}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: 20,
          textAlign: 'center',
          marginTop: '3vh',
        }}
      >
        {data.map(d => (
          <div>
            <a style={{ boxShadow: 'none' }} href={d.link}>
              {d.icon}
            </a>
            <p>{d.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SocialMedia
