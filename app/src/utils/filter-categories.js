import sciencePic from '../assets/filters/science.svg'
import businessPic from '../assets/filters/business.svg'
import educationPic from '../assets/filters/learning.svg'
import softwarePic from '../assets/filters/software.svg'
import scienceDarkPic from '../assets/filters/science-dark.svg'
import businessDarkPic from '../assets/filters/business-dark.svg'
import educationDarkPic from '../assets/filters/learning-dark.svg'
import softwareDarkPic from '../assets/filters/software-dark.svg'

export const filterCategories = {
  business: {
    text: 'Business',
    categories: ['art-of-war', 'leadership', 'management', 'business'],
    isSelected: true,
    style: {
      imgUrl: businessPic,
      imgUrlDark: businessDarkPic,
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
      imgUrl: softwarePic,
      imgUrlDark: softwareDarkPic,
    },
  },
  education: {
    text: 'Learning',
    categories: ['study', 'habit', 'teaching', 'philosophy', 'learning'],
    isSelected: true,
    style: {
      imgUrl: educationPic,
      imgUrlDark: educationDarkPic,
    },
  },
  science: {
    text: 'Other',
    categories: ['astrology', 'astronomy', 'dnd', 'random'],
    isSelected: true,
    style: {
      imgUrl: sciencePic,
      imgUrlDark: scienceDarkPic,
    },
  },
}
