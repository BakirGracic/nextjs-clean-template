import type { Metadata } from 'next';
import type { Viewport } from 'next';

export const coreMetadataObject: Metadata = {
	title: '',
	description: '',
	applicationName: '',
	authors: [{ name: '', url: '' }],
	creator: '',
	publisher: '',
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_URL}/`,
		languages: {
			bs: `${process.env.NEXT_PUBLIC_APP_URL}/`,
			en: `${process.env.NEXT_PUBLIC_APP_URL}/`,
		},
	},
	openGraph: {
		title: '',
		description: '',
		url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
		siteName: '',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_APP_URL}/og.png`,
				width: 1200,
				height: 630,
				alt: '<<APP_NAME>> OpenGraph Image',
			},
		],
		locale: '',
		type: 'website',
	},
	robots: {
		index: false,
		follow: false,
	},
	// not changing
	icons: {
		icon: [
			{ url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
			{ url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
			{ url: '/favicon.svg', type: 'image/svg+xml' },
		],
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	appleWebApp: {
		capable: true,
		title: '',
		statusBarStyle: 'black-translucent',
	},
};

export const coreViewportObject: Viewport = {
	themeColor: '#ffffff',
	colorScheme: 'only light',
};
