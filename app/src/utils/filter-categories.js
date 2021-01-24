import astronomyPic from '../assets/filters/science.svg'
import businessPic from '../assets/filters/business.svg'
import educationPic from '../assets/filters/learning.svg'
import technologyPic from '../assets/filters/software.svg'

export const filterCategories = {
  business: {
    text: 'Business',
    categories: ['art-of-war', 'leadership', 'management', 'business'],
    isSelected: true,
    style: {
      imgUrl: businessPic,
    },
  },
  technology: {
    text: 'Software',
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
  education: {
    text: 'Learning',
    categories: ['study', 'habit', 'teaching', 'philosophy'],
    isSelected: true,
    style: {
      imgUrl: educationPic,
    },
  },
  science: {
    text: 'Other',
    categories: ['astrology', 'astronomy', 'dnd'],
    isSelected: true,
    style: {
      imgUrl: astronomyPic,
    },
  },
}
