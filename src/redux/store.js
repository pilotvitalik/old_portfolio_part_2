// icons for Navbar
  import aboutImg from '../img/iconNavbar/about_white.svg';
  import blogImg from '../img/iconNavbar/blog_white.svg';
  import contactImg from '../img/iconNavbar/contact_white.svg';
  import homeImg from '../img/iconNavbar/home_white.svg';
  import portfolioImg from '../img/iconNavbar/portfolio_white.svg';
  import resumeImg from '../img/iconNavbar/resume_white.svg';

  import aboutImgDark from '../img/iconNavbar/about_dark.svg';
  import blogImgDark from '../img/iconNavbar/blog_dark.svg';
  import contactImgDark from '../img/iconNavbar/contact_dark.svg';
  import homeImgDark from '../img/iconNavbar/home_dark.svg';
  import portfolioImgDark from '../img/iconNavbar/portfolio_dark.svg';
  import resumeImgDark from '../img/iconNavbar/resume_dark.svg';

import logo from '../img/logo/logo.jpg';

// icons for social in the Navbar
  import facebook from '../img/iconSocial/facebook.png';
  import twitter from '../img/iconSocial/twitter.png';
  import youtube from '../img/iconSocial/youtube.png';
  import vk from '../img/iconSocial/vk.png';

  import facebookDark from '../img/iconSocial/facebook_dark.png';
  import twitterDark from '../img/iconSocial/twitter_dark.png';
  import youtubeDark from '../img/iconSocial/youtube_dark.png';
  import vkDark from '../img/iconSocial/vk_dark.png';

// icons for contact page
  import contactIcon from '../img/contactPage/mail.svg';
  import pointMap from '../img/contactPage/address.svg';
  import phone from '../img/contactPage/phone.svg';

// icons for about page
  import user from '../img/aboutPage/user.svg';
  import notebook from '../img/aboutPage/services/notebook.svg';
  import responsive from '../img/aboutPage/services/responsive.svg';
  import BJR from '../img/aboutPage/clients/BJR.jpg';
  import user_photo from '../img/aboutPage/testimonials/user_avatar.jpg'; 

// icons for resume page
  import resume from '../img/resume/resume.svg';

// icons for portfolio page
  import portfolio from '../img/portfolio/portfolio.svg';
  import mySite from '../img/portfolio/list_portfolio/portfolioSite.jpg';

// icons for blog page
  import blog from '../img/blog/blog.svg';
  import blog_140920 from '../img/blog/blogs/140920.jpg';

let store = {
  navMenuList: [
    [
      '/',
      {
        whiteImg: homeImg,
        darkImg: homeImgDark,
      },
      {
        name: 'главная',
        title: 'Главная',
        id: 4,
      },
    ],
    [
      '/about_me',
      {
        whiteImg: aboutImg,
        darkImg: aboutImgDark,
      },
      {
        name: 'обо мне',
        title: 'Обо мне',
        id: 1,
      },
    ],
    [
      '/resume',
      {
        whiteImg: resumeImg,
        darkImg: resumeImgDark,
      },
      {
        name: 'резюме',
        title: 'Резюме',
        id: 6,
      },
    ],
    [
      '/portfolio',
      {
        whiteImg: portfolioImg,
        darkImg: portfolioImgDark,
      },
      {
        name: 'портфолио',
        title: 'Портфолио',
        id: 5,
      },
    ],
    [
      '/blog',
      {
        whiteImg: blogImg,
        darkImg: blogImgDark,
      },
      {
        name: 'блог',
        title: 'Блог',
        id: 2,
      },
    ],
    [
      '/contacts',
      {
        whiteImg: contactImg,
        darkImg: contactImgDark,
      },
      {
        name: 'контакты',
        title: 'Контакты',
        id: 3,
      },
    ],
  ],
  logo: {
    url: logo,
    name: 'это я',
    title: 'Виталий Кожушко'
  },
  socialColor: [
    {
      url: facebook,
      name: 'facebook',
      id: 1,
    },
    {
      url: twitter,
      name: 'twitter',
      id: 2,
    },
    {
      url: youtube,
      name: 'youtube',
      id: 3,
    },
    {
      url: vk,
      name: 'vk',
      id: 4,
    }
  ],
  socialDark: [
    {
      url: facebookDark,
      name: 'facebook',
      id: 1,
    },
    {
      url: twitterDark,
      name: 'twitter',
      id: 2,
    },
    {
      url: youtubeDark,
      name: 'youtube',
      id: 3,
    },
    {
      url: vkDark,
      name: 'vk',
      id: 4,
    }
  ],
  rights: {
    year: '2020',
    sign: '&copy;',
    text: 'Все права защищены',
  },
  contactPage: [
    {
      contactIcon: {
        titlePage: 'Контакты',
        url: contactIcon,
        name: 'конверт',
      },
    },
    {
      button:{
        title: 'Отправить',
        type: 'submit',
        link: '',
      }
    },
    [
      {
        id: 1,
        contact: 'itvkip@yandex.ru',
        img: contactIcon,
        titleImg: 'e-mail',
      },
      {
        id: 2,
        contact: '190000, Санкт-Петербург',
        img: pointMap,
        titleImg: 'адрес',
      },
      {
        id: 3,
        contact: '+7 (921) 906-49-13',
        img: phone,
        titleImg: 'телефон',
      },
    ],
    {
      title:'Обратная связь', 
    }
  ],
  aboutPage:[
    {
      aboutIcon: {
        titlePage: 'Обо мне',
        url: user,
        name: 'обо мне',
      },
    },
    {
      about: {
        titleArticle: 'Frontend Developer',
        text: 'Lorem ipsum Esse consectetur eiusmod qui in dolore magna labore cillum occaecat elit sed non et ullamco fugiat occaecat et deserunt nulla culpa incididunt commodo tempor adipisicing dolore minim ut excepteur consectetur do nostrud incididunt dolore et ullamco proident sint ut excepteur do dolore cupidatat mollit tempor nisi laboris ad sed laborum incididunt fugiat in in id cupidatat exercitation ad et non fugiat minim pariatur in ut magna dolore ut deserunt pariatur do ex et in in elit tempor aliquip ut commodo duis aliqua aliquip cupidatat dolore irure dolor pariatur mollit aliqua et sed nisi ut qui nisi incididunt incididunt occaecat elit aliquip consectetur aliquip ea id do tempor velit sed ea sed sit labore ex velit incididunt esse velit pariatur nulla sint id adipisicing duis sed est dolore sint officia esse et in qui reprehenderit veniam laborum amet ea est ea non cillum nulla dolor amet esse ullamco nulla nulla incididunt id ullamco in cillum consequat id officia elit adipisicing duis nisi in eiusmod laborum ad sit ut sint dolore dolore ut adipisicing sunt aliqua reprehenderit irure deserunt sit ex culpa nisi sed in velit in sit ad quis deserunt tempor esse qui dolor aute anim in irure in commodo velit occaecat sit enim laboris enim velit duis duis commodo pariatur duis ex id nisi enim dolore aute fugiat.',
        wishes: 'С наилучшими пожеланиями, Виталий Кожушко',
      },
      personalInfo: {
        titleArticle: 'Персональная информация',
        data: [
          {
            id: 'pers_1',
            name: 'ФИО',
            val: 'Виталий Кожушко'
          },
          {
            id: 'pers_2',
            name: 'Возраст',
            val: '33'
          },
          {
            id: 'pers_3',
            name: 'Адрес',
            val: '190000, Санкт-Петербург'
          },
          {
            id: 'pers_4',
            name: 'Эл. почта',
            val: 'itvkip@yandex.ru'
          },
          {
            id: 'pers_5',
            name: 'Телефон',
            val: '+7 (921) 906-49-13'
          },
        ],
        button:{
          title: 'Скачать резюме',
          type: 'button',
          link: '',
        }
      },
    },
    {
      title:'Услуги',
      data: [
        {
          id: 'serv_1',
          img: notebook,
          alt: 'Разработка',
          title: 'Web программирование',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada viverra odio, eu tincidunt risus.',
        },
        {
          id: 'serv_2',
          img: responsive,
          alt: 'Адаптив',
          title: 'Адаптивный дизайн',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada viverra odio, eu tincidunt risus.',
        }
      ],
    },
    {
      title:'Клиенты',
      data: [
        {
          id: 'client_1',
          img: BJR,
          alt: 'БЖР',
        },
      ],
    },
    {
      title: 'Рекомендации',
      data: [
        {
          id: 'testim_1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at interdum diam. Etiam quam urna, aliquet laoreet neque nec, dapibus luctus enim. Nullam eu eros a dui malesuada hendrerit. Praesent.',
          photo: user_photo,
          user_name: 'Kate Fox',
          user_job: 'Digital Marketing Executive',
        },
        {
          id: 'testim_2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at interdum diam. Etiam quam urna, aliquet laoreet neque nec, dapibus luctus enim. Nullam eu eros a dui malesuada hendrerit. Praesent.',
          photo: user_photo,
          user_name: 'Emma Jones',
          user_job: 'Creative Director',
        },
      ],
    }
  ],
  resumePage:[
    {
      resumeIcon: {
        titlePage: 'Мое резюме',
        url: resume,
        name: 'мое резюме',
      },
    },
    {
      description: [
        {
          title: 'Работа',
          data: [
            {
              id: 'resumeWork_1',
              startYear: 2018,
              stopYear: 2021,
              position: 'Frontend developer',
              companyName: 'БЖР',
              companyCity: 'Санкт-Петербург, Россия',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget facilisis felis, eu lobortis sem. Donec efficitur, tellus eu eleifend dignissim, augue mauris faucibus ex, sed pharetra enim ex et nisi.'
            },
            {
              id: 'resumeWork_2',
              startYear: 2018,
              stopYear: 2021,
              position: 'Frontend developer',
              companyName: 'БЖР',
              companyCity: 'Санкт-Петербург, Россия',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget facilisis felis, eu lobortis sem. Donec efficitur, tellus eu eleifend dignissim, augue mauris faucibus ex, sed pharetra enim ex et nisi.'
            },
            {
              id: 'resumeWork_3',
              startYear: 2018,
              stopYear: 2021,
              position: 'Frontend developer',
              companyName: 'БЖР',
              companyCity: 'Санкт-Петербург, Россия',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget facilisis felis, eu lobortis sem. Donec efficitur, tellus eu eleifend dignissim, augue mauris faucibus ex, sed pharetra enim ex et nisi.'
            },
          ]
        },
        {
          title: 'Образование',
          data: [
            {
              id: 'resumeEdu_1',
              startYear: 2018,
              stopYear: 2021,
              position: 'Frontend developer',
              courseName: 'БЖР',
              companyCity: 'Санкт-Петербург, Россия',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget facilisis felis, eu lobortis sem. Donec efficitur, tellus eu eleifend dignissim, augue mauris faucibus ex, sed pharetra enim ex et nisi.'
            },
            {
              id: 'resumeEdu_2',
              startYear: 2018,
              stopYear: 2021,
              position: 'Frontend developer',
              companyName: 'БЖР',
              companyCity: 'Санкт-Петербург, Россия',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget facilisis felis, eu lobortis sem. Donec efficitur, tellus eu eleifend dignissim, augue mauris faucibus ex, sed pharetra enim ex et nisi.'
            },
          ]
        }
      ],
      skills: [
        {
          title: 'Навыки',
        },
        [
          {
            id: 'skill_1',
            name: 'HTML',
          },
          {
            id: 'skill_2',
            name: 'CSS3',
          },
          {
            id: 'skill_3',
            name: 'JS',
          },
          {
            id: 'skill_4',
            name: 'React',
          },
        ]
      ]
    }
  ],
  portfolioPage: [
    {
      portfolioIcon: {
        titlePage: 'Портфолио',
        url: portfolio,
        name: 'Портфолио',
      },
    },
    {
      categories: [
        {
          id: 'catPortfolio_1',
          name: 'Все',
        },
        {
          id: 'catPortfolio_2',
          name: 'ReactJs + Redux',
        }
        ,
      ]
    },
    [
      {
        id: 'portfolio_1',
        title: 'Мой сайт',
        urlImage: mySite,
        url: '#',
        technologies: [
          {
            id: 'tech_1',
            name: 'ReactJs',
          },
          {
            id: 'tech_2',
            name: 'Redux',
          },
        ]
      }
    ]
  ],
  blogPage:[
    {
      blogIcon: {
        titlePage: 'Блог',
        url: blog,
        name: 'Блог',
      },
    },
    [
      {
        id: 'blog_1',
        titleBlog: 'Первая запись',
        date: '14 сентября 2020',
        themeBlog: 'Разное',
        blogPhoto: blog_140920,
        namePhoto: '14 сентября 2020',
        link: '#'
      }
    ]
  ]
}

export { store };