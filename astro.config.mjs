// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const locales = {
	root: { label: 'English', lang: 'en' },
	ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
	ca: { label: 'Català', lang: 'ca' },
	cs: { label: 'Čeština', lang: 'cs' },
	da: { label: 'Dansk', lang: 'da' },
	de: { label: 'Deutsch', lang: 'de' },
	el: { label: 'Ελληνικά', lang: 'el' },
	es: { label: 'Español', lang: 'es' },
	fa: { label: 'فارسی', lang: 'fa', dir: 'rtl' },
	fi: { label: 'Suomi', lang: 'fi' },
	fr: { label: 'Français', lang: 'fr' },
	gl: { label: 'Galego', lang: 'gl' },
	he: { label: 'עברית', lang: 'he', dir: 'rtl' },
	hi: { label: 'हिन्दी', lang: 'hi' },
	hu: { label: 'Magyar', lang: 'hu' },
	id: { label: 'Bahasa Indonesia', lang: 'id' },
	is: { label: 'Íslenska', lang: 'is' },
	it: { label: 'Italiano', lang: 'it' },
	ja: { label: '日本語', lang: 'ja' },
	ko: { label: '한국어', lang: 'ko' },
	lv: { label: 'Latviešu', lang: 'lv' },
	mk: { label: 'Македонски', lang: 'mk' },
	nb: { label: 'Norsk bokmål', lang: 'nb' },
	nl: { label: 'Nederlands', lang: 'nl' },
	pl: { label: 'Polski', lang: 'pl' },
	pt: { label: 'Português', lang: 'pt' },
	ro: { label: 'Română', lang: 'ro' },
	ru: { label: 'Русский', lang: 'ru' },
	sk: { label: 'Slovenčina', lang: 'sk' },
	sv: { label: 'Svenska', lang: 'sv' },
	th: { label: 'ไทย', lang: 'th' },
	tr: { label: 'Türkçe', lang: 'tr' },
	uk: { label: 'Українська', lang: 'uk' },
	vi: { label: 'Tiếng Việt', lang: 'vi' },
	'zh-CN': { label: '简体中文', lang: 'zh-CN' },
	'zh-TW': { label: '繁體中文', lang: 'zh-TW' },
};

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			customCss: ['./src/custom.css'],
			components: {
				Head: './src/components/Head.astro',
				Header: './src/components/Header.astro',
				Sidebar: './src/components/Sidebar.astro',
			},
			locales,
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/phant0m0567/phant0m0567.github.io/' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/RQe55a2uhS' },
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Welcome',
					items: [{ label: 'Why Solaris?', slug: 'projects/solaris-v2/why-solaris' }],
				},
				{
					label: 'Install Solaris',
					items: [{ label: 'Installation', slug: 'projects/solaris-v2/installation' }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
