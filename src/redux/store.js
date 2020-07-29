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

import facebook from '../img/iconSocial/facebook.png';
import twitter from '../img/iconSocial/twitter.png';
import youtube from '../img/iconSocial/youtube.png';
import vk from '../img/iconSocial/vk.png';

import facebookDark from '../img/iconSocial/facebook_dark.png';
import twitterDark from '../img/iconSocial/twitter_dark.png';
import youtubeDark from '../img/iconSocial/youtube_dark.png';
import vkDark from '../img/iconSocial/vk_dark.png';

let store = {
	whiteImg : [
		{
			url: aboutImg,
			name: 'обо мне',
			title: 'Обо мне',
			id: 1,
		},
		{
			url: blogImg,
			name: 'блог',
			title: 'Блог',
			id: 2,
		},
		{
			url: contactImg,
			name: 'контакты',
			title: 'Контакты',
			id: 3,
		},
		{
			url: homeImg,
			name: 'главная',
			title: 'Главная',
			id: 4,
		},
		{
			url: portfolioImg,
			name: 'портфолио',
			title: 'Портфолио',
			id: 5,
		},
		{
			url: resumeImg,
			name: 'резюме',
			title: 'Резюме',
			id: 6,
		}
	],
	darkImg : [
		{
			url: aboutImgDark,
			name: 'обо мне',
			title: 'Обо мне',
			id: 1,
		},
		{
			url: blogImgDark,
			name: 'блог',
			title: 'Блог',
			id: 2,
		},
		{
			url: contactImgDark,
			name: 'контакты',
			title: 'Контакты',
			id: 3,
		},
		{
			url: homeImgDark,
			name: 'главная',
			title: 'Главная',
			id: 4,
		},
		{
			url: portfolioImgDark,
			name: 'портфолио',
			title: 'Портфолио',
			id: 5,
		},
		{
			url: resumeImgDark,
			name: 'резюме',
			title: 'Резюме',
			id: 6,
		}
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
	}
}

export { store };