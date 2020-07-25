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
	logo: {
		url: logo,
		name: 'это я',
		title: 'Виталий Кожушко'
	}
}

export { store };