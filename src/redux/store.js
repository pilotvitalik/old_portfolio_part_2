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
	},
	socialColor: [
		{
			url: facebook,
			name: 'facebook',
		},
		{
			url: twitter,
			name: 'twitter',
		},
		{
			url: youtube,
			name: 'youtube',
		},
		{
			url: vk,
			name: 'vk',
		}
	],
	socialDark: [
		{
			url: facebookDark,
			name: 'facebook',
		},
		{
			url: twitterDark,
			name: 'twitter',
		},
		{
			url: youtubeDark,
			name: 'youtube',
		},
		{
			url: vkDark,
			name: 'vk',
		}
	],
}

export { store };