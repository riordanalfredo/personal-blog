import astronomyPic from '../assets/filter/astronomy.jpg'
import businessPic from '../assets/filter/business.jpg'
import educationPic from '../assets/filter/education.jpg'
import technologyPic from '../assets/filter/technology.jpg'

export const filterCategories = {
  astronomy: {
    text: 'Astronomy and Astrology',
    categories: ['astrology', 'capricorn', 'software'],
    isSelected: true,
    style: {
      imgUrl: astronomyPic,
    },
  },
  business: {
    text: 'Business, Leadership, Management',
    categories: ['art-of-war', 'leadership', 'management'],
    isSelected: true,
    style: {
      imgUrl: businessPic,
    },
  },
  education: {
    text: 'Education, Learning, and Teaching',
    categories: ['study', 'habit', 'teaching'],
    isSelected: true,
    style: {
      imgUrl: educationPic,
    },
  },
  technology: {
    text: 'Software and IT',
    categories: [
      'code',
      'iot',
      'software',
      'front-end',
      'back-end',
      'python',
      'node-js',
    ],
    isSelected: true,
    style: {
      imgUrl: technologyPic,
    },
  },
}
