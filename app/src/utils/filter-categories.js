import sciencePic from '../assets/filters/science.svg'
import businessPic from '../assets/filters/business.svg'
import educationPic from '../assets/filters/learning.svg'
import softwarePic from '../assets/filters/software.svg'
import scienceDarkPic from '../assets/filters/science-dark.svg'
import businessDarkPic from '../assets/filters/business-dark.svg'
import educationDarkPic from '../assets/filters/learning-dark.svg'
import softwareDarkPic from '../assets/filters/software-dark.svg'

export const filterCategories = {
  education: {
    text: 'Education',
    categories: [
      'study',
      'habit',
      'teaching',
      'philosophy',
      'learning',
      'learning design',
      'learning analytics',
    ],
    isSelected: true,
    style: {
      imgUrl: educationPic,
      imgUrlDark: educationDarkPic,
    },
  },
  technology: {
    text: 'Technology',
    categories: [
      'code',
      'iot',
      'software',
      'front-end',
      'back-end',
      'python',
      'node-js',
      'learning analytics',
    ],
    isSelected: true,
    style: {
      imgUrl: softwarePic,
      imgUrlDark: softwareDarkPic,
    },
  },
  community: {
    text: 'Community',
    categories: [
      'art-of-war',
      'leadership',
      'management',
      'business',
      'people',
      'co-creation',
      'socio-technical',
    ],
    isSelected: true,
    style: {
      imgUrl: businessPic,
      imgUrlDark: businessDarkPic,
    },
  },
  other: {
    text: 'Other',
    categories: [
      'astrology',
      'astronomy',
      'dnd',
      'random',
      'psychology',
      'pseudoscience',
    ],
    isSelected: true,
    style: {
      imgUrl: sciencePic,
      imgUrlDark: scienceDarkPic,
    },
  },
}
