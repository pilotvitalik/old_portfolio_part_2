import aboutImg from '../img/about_white.svg';
import blogImg from '../img/blog_white.svg';
import contactImg from '../img/contact_white.svg';
import homeImg from '../img/home_white.svg';
import portfolioImg from '../img/portfolio_white.svg';
import resumeImg from '../img/resume_white.svg';

import aboutImgDark from '../img/about_dark.svg';
import blogImgDark from '../img/blog_dark.svg';
import contactImgDark from '../img/contact_dark.svg';
import homeImgDark from '../img/home_dark.svg';
import portfolioImgDark from '../img/portfolio_dark.svg';
import resumeImgDark from '../img/resume_dark.svg';

let store = {
	whiteImg : [
		{
			url: aboutImg,
			name: 'обо мне',
			title: 'Обо мне'
		},
		{
			url: blogImg,
			name: 'блог',
			title: 'Блог'
		},
		{
			url: contactImg,
			name: 'контакты',
			title: 'Контакты'
		},
		{
			url: homeImg,
			name: 'главная',
			title: 'Главная'
		},
		{
			url: portfolioImg,
			name: 'портфолио',
			title: 'Портфолио'
		},
		{
			url: resumeImg,
			name: 'резюме',
			title: 'Резюме'
		}
	],
	darkImg : [
		{
			url: aboutImgDark,
			name: 'обо мне',
			title: 'Обо мне'
		},
		{
			url: blogImgDark,
			name: 'блог',
			title: 'Блог'
		},
		{
			url: contactImgDark,
			name: 'контакты',
			title: 'Контакты'
		},
		{
			url: homeImgDark,
			name: 'главная',
			title: 'Главная'
		},
		{
			url: portfolioImgDark,
			name: 'портфолио',
			title: 'Портфолио'
		},
		{
			url: resumeImgDark,
			name: 'резюме',
			title: 'Резюме'
		}
	],
}

export { store };